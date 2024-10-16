import { useEffect, useState } from "react";
import { ValidationProps } from "../interface";
import { alerts } from "../data";

function ValidationAlert({
  input,
  setInput,
  character,
  wordlist,
  setWordList,
  wordData,
  score,
  setScore,
}: ValidationProps) {
  const [alert, setAlert] = useState("");

  const [alertVisible, setAlertVisible] = useState(false);
  const alertVisibility = () => {
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
    }, 2500);
  };
  const showAlert = (alert: string) => {
    setAlert(alert);
    alertVisibility();
  };



  function validateLength(word: string) {
    if (word.length < 4) {
      showAlert(alerts.Length);
      return false;
    }
    return true;
  }

  function findWord(word: string) {
    return wordData.find((line: string) => line === word.trim());
  }

  function validateStartingCharacter(word: string) {
    if (!word.startsWith(character)) {
      showAlert(alerts.StartingCharacter + character);
      return false;
    }
    return true;
  }

  function isDuplicate(word: string) {
    if (wordlist.includes(word)) {
      showAlert(word + alerts.AlreadyFound);
      return true;
    }
    return false;
  }

  function handleSubmit(word: string) {
    if (!validateLength(word)) {
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

    if (!validateStartingCharacter(submittedWord)) {
      setInput(character);
      return;
    }
    if (isDuplicate(submittedWord)) {
      setInput(character);
      return;
    }

    setWordList([...wordlist, submittedWord]);
    setScore(score + 1);
    setInput(character); // Reset input to starting character
  }

  useEffect(() => {
    handleSubmit(input);
  }, []);

  return (
    <div
      className={`absolute top-40 bg-black p-2 rounded ${
        alertVisible ? "" : "hidden"
      }`}
    >
      {alert}
    </div>
  );
}

export default ValidationAlert;
