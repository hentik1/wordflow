import { useEffect, useState } from "react";
import { SealedValidationProps } from "../../interface";
import { alerts } from "../../data";

export function SealedValidation({
  input,
  setInput,
  character,
  wordlist,
  setWordList,
  words,
  score,
  setScore,
}: SealedValidationProps) {
  const [alert, setAlert] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);

  function alertVisibility() {
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
    }, 2500);
  }

  function showAlert(alert: string) {
    setAlert(alert);
    alertVisibility();
  }

  function findWord(word: string) {
    return words.includes(word) ? word : null;
  }

  function validateLength(word: string) {
    if (word.length < 4) {
      showAlert(alerts.Length);
      return true;
    }
    return false;
  }

  function validateStartingCharacter(word: string) {
    if (!word.startsWith(character)) {
      showAlert(alerts.StartingCharacter + character);
      return true;
    }
    return false;
  }

  function isDuplicate(word: string) {
    if (wordlist.includes(word)) {
      showAlert(word + alerts.AlreadyFound);
      return true;
    }
    return false;
  }

  function handleSubmit(word: string) {
    if (validateLength(word)) {
      setInput(character);
      return;
    }

    const submittedWord = findWord(word);
    if (!submittedWord) {
      const shortendInput =
        word.length >= 16 ? word.substring(0, 16) + ".. " : word;
      showAlert(shortendInput + alerts.NotFound);
      setInput(character);
      return;
    }
    if (validateStartingCharacter(submittedWord)) {
      setInput(character);
      return;
    }
    if (isDuplicate(submittedWord)) {
      setInput(character);
      return;
    }

    setWordList([...wordlist, submittedWord]);
    setScore(score + 1);
    setInput(character);
  }

  useEffect(() => {
    handleSubmit(input);
  }, []);

  return (
    <div
      className={
        alertVisible ? "absolute top-44 bg-black p-2 rounded" : "hidden"
      }
    >
      {alert}
    </div>
  );
}
