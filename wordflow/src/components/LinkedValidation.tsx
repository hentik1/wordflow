import { useEffect, useState } from "react";
import { LinkedValidationProps } from "../interface";
import { alerts } from "../data";

export function LinkedValidation({
  input,
  setInput,
  wordlist,
  setWordList,
  wordData,
  score,
  setScore,
}: LinkedValidationProps) {
  const [alert, setAlert] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);

  // Show alert for 2.5 seconds
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
      return true;
    }
    return false;
  }

  function findWord(word: string) {
    return wordData.find((line: string) => line === word.trim());
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
      setInput("");
      return;
    }

    const submittedWord = findWord(word);
    if (!submittedWord) {
      const shortendInput =
        word.length >= 16 ? word.substring(0, 16) + ".. " : word;
      showAlert(shortendInput + alerts.NotFound);
      setInput("");
      return;
    }

    if (isDuplicate(submittedWord)) {
      setInput("");
      return;
    }

    setWordList([...wordlist, submittedWord]);
    setScore(score + 1);
    setInput("");
  }

  useEffect(() => {
    handleSubmit(input);
  }, []);

  return (
    <div
      className={`absolute top-44 bg-black p-2 rounded ${
        alertVisible ? "" : "hidden"
      }`}
    >
      {alert}
    </div>
  );
}
