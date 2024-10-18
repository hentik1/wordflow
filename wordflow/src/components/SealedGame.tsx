import { useEffect, useRef, useState } from "react";
import { SealedProps, Gamemode } from "../interface";

import ValidationAlert from "./ValidationAlert";
import useFetchWords from "../hooks/useFetchWords";
import useCountdown from "../hooks/useCountdown";
import CountdownBar from "./CountdownBar";
import Keyboard from "./Keyboard";
import { alphabet } from "../data";

function SealedGame({ character, setAppVisible, gamemode, time }: SealedProps) {
  const [input, setInput] = useState<string>(character);
  const [wordlist, setWordList] = useState<string[]>([]);
  const [toggleAlert, setToggleAlert] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [gameover, setGameover] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const { wordData } = useFetchWords();

  const handleQuit = () => {
    setAppVisible(true);
  };

  const handleRetry = () => {
    start(time);
    setInput(character);
    setScore(0);
    setWordList([]);

    setGameover(false);
  };

  const handleSubmit = () => {
    setTimeout(() => {
      setToggleAlert(true);
    }, 10);
    setToggleAlert(false);
  };

  const { secondsLeft, start } = useCountdown();

  useEffect(() => start(time), []);

  useEffect(() => {
    if (secondsLeft < 0) {
      setGameover(true);
    }
  }, [secondsLeft]);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      let key = event.key;
      if (key === "Backspace") {
        setInput(input.slice(0, -1));
      } else if (key === "Enter") {
        handleSubmit();
      } else if (alphabet.includes(key.toUpperCase())) {
        setInput(() => input + key.toUpperCase());
      }
      console.log(key);
    };

    document.addEventListener("keydown", handleKey, true);
    return () => {
      document.removeEventListener("keydown", handleKey, true);
    };
  });

  return (
    <>
      <div className="bg-neutral-900 flex flex-col w-svw h-svh justify-center items-center relative">
        <CountdownBar secondsLeft={secondsLeft} time={time} />
        <div className="absolute top-0 flex flex-row w-full justify-evenly">
          <div>{score}</div>
        </div>

        <div className="flex items-center overflow-x-auto overflow-y-hidden flex-col flex-wrap max-h-32 absolute left-0 top-10 w-full">
          {wordlist.sort().map((value, i) => (
            <div
              key={value}
              className={`w-auto text-center ${
                value === input ? "bg-green-300" : ""
              }`}
            >
              {wordlist[i]}
            </div>
          ))}
        </div>

        <input
          ref={inputRef}
          type="text"
          readOnly
          value={input}
          className="select-none outline-none text-center text-2xl w-full text-white bg-neutral-900"
          onChange={(e) => setInput(e.target.value.toUpperCase())}
        />
        {toggleAlert ? (
          <ValidationAlert
            input={input}
            setInput={setInput}
            character={character}
            wordlist={wordlist}
            setWordList={setWordList}
            wordData={wordData}
            score={score}
            setScore={setScore}
          />
        ) : null}

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

      <div
        className={
          gameover
            ? "absolute left-0 top-0 bg-neutral-900 flex flex-col w-screen h-screen justify-center items-center z-50"
            : "hidden"
        }
      >
        Score: {score}
        <div onClick={handleRetry}>Retry</div>
        <div onClick={handleQuit}>Quit</div>
      </div>
    </>
  );
}

export default SealedGame;
