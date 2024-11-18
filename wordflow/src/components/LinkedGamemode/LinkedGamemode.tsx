import { useEffect, useRef, useState } from "react";
import { Keyboard } from "../common/Keyboard";
import { LinkedValidation } from "./LinkedValidation";
import { GameStatus } from "../common/GameStatus/GameStatus";
import { words } from "../../data";
import { Gameover } from "../common/Gameover";
import { useAtom } from "jotai";
import { characterAtom, gamemodeAtom } from "../../store";

export function LinkedGamemode() {
  const [character] = useAtom(characterAtom);
  const [gamemode] = useAtom(gamemodeAtom);
  const [input, setInput] = useState<string>(character);
  const [wordlist, setWordList] = useState<string[]>([]);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const [hearts, setHearts] = useState<number>(3);

  // Input caret is always visible
  useEffect(() => {
    const handleClick = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const handleRetry = () => {
    setInput(character);
    setScore(0);
    setWordList([]);
  };

  const handleSubmit = () => {
    setTimeout(() => {
      setShowAlert(true);
    }, 10);
    setShowAlert(false);
  };

  return (
    <>
      {hearts > 0 ? (
        <div className="content">
          <GameStatus gamemode={gamemode} score={score} />

          <input
            type="text"
            autoFocus
            ref={inputRef}
            value={input}
            className="select-none outline-none text-center text-2xl w-full overflow-scroll text-white bg-background"
            onChange={(e) => setInput(e.target.value.toUpperCase())}
          />
          {showAlert && (
            <LinkedValidation
              input={input}
              setInput={setInput}
              wordlist={wordlist}
              setWordList={setWordList}
              words={words}
              score={score}
              setScore={setScore}
            />
          )}
          <Keyboard
            input={input}
            setInput={setInput}
            handleSubmit={handleSubmit}
          />
        </div>
      ) : (
        <Gameover score={score} handleRetry={handleRetry} />
      )}
    </>
  );
}
