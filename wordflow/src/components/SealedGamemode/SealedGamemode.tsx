import { useEffect, useRef, useState } from "react";
import { useAtom } from "jotai";
import { useCountdown } from "../../hooks/useCountdown";
import { Keyboard } from "../common/Keyboard";
import { Gameover } from "../common/Gameover";
import { SealedValidation } from "./SealedValidation";
import { characterAtom, gamemodeAtom, timeAtom } from "../../store";
import { GameStatus } from "../common/GameStatus/GameStatus";
import { SealedWordlist } from "./SealedWordlist";
import { words } from "../../data";

export function SealedGamemode() {
  const [character] = useAtom(characterAtom);
  const [time] = useAtom(timeAtom);
  const [gamemode] = useAtom(gamemodeAtom);
  const [input, setInput] = useState<string>(character);
  const [wordlist, setWordList] = useState<string[]>([]);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const { secondsLeft, start } = useCountdown();
  const inputRef = useRef<HTMLInputElement>(null);

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

  useEffect(() => start(time), []);

  const handleRetry = () => {
    start(time);
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
      {secondsLeft > 0 ? (
        <div className="content">
          <GameStatus
            secondsLeft={secondsLeft}
            time={time}
            gamemode={gamemode}
            score={score}
          />
          <SealedWordlist input={input} wordlist={wordlist} />
          <input
            type="text"
            autoFocus
            ref={inputRef}
            value={input}
            className="select-none outline-none text-center text-2xl w-full overflow-scroll text-white bg-background"
            onChange={(e) => setInput(e.target.value.toUpperCase())}
          />
          {showAlert && (
            <SealedValidation
              input={input}
              setInput={setInput}
              character={character}
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
