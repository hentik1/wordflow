import { useCallback, useEffect, useState } from "react";
import { SealedProps } from "../interface";

import useFetchWords from "../hooks/useFetchWords";
import useCountdown from "../hooks/useCountdown";
import CountdownBar from "./CountdownBar";
import Keyboard from "./Keyboard";
import { alphabet } from "../data";
import Gameover from "./Gameover";
import SealedValidation from "./SealedValidation";

function SealedGame({ character, setAppVisible, time }: SealedProps) {
  const [input, setInput] = useState<string>(character);
  const [wordlist, setWordList] = useState<string[]>([]);
  const [toggleAlert, setToggleAlert] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  const { wordData } = useFetchWords();

  const { secondsLeft, start } = useCountdown();

  useEffect(() => start(time), []);

  const handleQuit = () => {
    setAppVisible(true);
  };

  const handleRetry = () => {
    start(time);
    setInput(character);
    setScore(0);
    setWordList([]);
  };

  const handleSubmit = () => {
    setTimeout(() => {
      setToggleAlert(true);
    }, 10);
    setToggleAlert(false);
  };

  // Keyboard inputs
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      const key = event.key;
      if (key === "Backspace") {
        setInput(input.slice(0, -1));
      } else if (key === "Enter") {
        handleSubmit();
      } else if (alphabet.includes(key.toUpperCase())) {
        setInput(() => input + key.toUpperCase());
      }
    };

    document.addEventListener("keydown", handleKey, true);
    return () => {
      document.removeEventListener("keydown", handleKey, true);
    };
  });

  return (
    <>
      <div className="bg-neutral-900 flex flex-col w-svw h-svh justify-center items-center relative overflow-hidden">
        <CountdownBar secondsLeft={secondsLeft} time={time} />
        <div className="absolute top-0 flex flex-row w-full justify-evenly p-2">
          <div>{score}</div>
        </div>

        <div className="flex items-center overflow-x-auto overflow-y-hidden flex-col flex-wrap max-h-32 absolute left-0 top-10 w-full">
          {wordlist.sort().map((value, i) => (
            <div
              key={value}
              className={`w-auto text-center m-0.5 ${
                value === input ? "bg-green-800 rounded p-1" : ""
              }`}
            >
              {wordlist[i]}
            </div>
          ))}
        </div>

        <input
          type="text"
          readOnly
          value={input}
          className="select-none outline-none text-center text-2xl w-full text-white bg-neutral-900"
          onChange={(e) => setInput(e.target.value.toUpperCase())}
        />
        {toggleAlert && (
          <SealedValidation
            input={input}
            setInput={setInput}
            character={character}
            wordlist={wordlist}
            setWordList={setWordList}
            wordData={wordData}
            score={score}
            setScore={setScore}
          />
        )}

        <Keyboard
          input={input}
          setInput={setInput}
          handleSubmit={handleSubmit}
        />
        <div
          onClick={handleQuit}
          className="mt-16 text-3xl cursor-pointer max-w-64"
        >
          Quit
        </div>
      </div>

      {secondsLeft <= 0 && (
        <Gameover
          score={score}
          handleRetry={handleRetry}
          handleQuit={handleQuit}
        />
      )}
    </>
  );
}

export default SealedGame;
