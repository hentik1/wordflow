import { useEffect, useRef, useState } from "react";
import { SealedProps, Gamemode } from "../interface";

import ValidationAlert from "./ValidationAlert";
import useFetchWords from "../hooks/useFetchWords";
import useCountdown from "../hooks/useCountdown";
import CountdownBar from "./CountdownBar";
import Keyboard from "./Keyboard";

function SealedGame({
  character,
  setAppVisible,
  gamemode,
  time,
}: SealedProps) {
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
    autoFocusInput();
    setScore(0);
    setWordList([]);

    setGameover(false);
  };

  const handleSubmit = () => {
    setTimeout(() => {
      setToggleAlert(true);
    }, 10);
    setToggleAlert(false);
    autoFocusInput();
  };

  const autoFocusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const dynamicInput = (value: string) => {
    if (gamemode !== Gamemode.LINKED) {
      if (input.length === 1 && value.length === 0) {
        return;
      } else {
        setInput(value);
      }
    } else {
      setInput(value);
    }
  };

  const { secondsLeft, start } = useCountdown();

  useEffect(() => start(time), []);

  useEffect(() => {
    if (secondsLeft < 0) {
      setGameover(true);
    }
  }, [secondsLeft]);

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
          autoFocus
          value={input}
          className="select-none outline-none text-center text-2xl w-full text-white bg-neutral-900"
          onChange={(e) => dynamicInput(e.target.value.toUpperCase())}
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
          autoFocusInput={autoFocusInput}
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
