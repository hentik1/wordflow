import { useEffect, useState } from "react";
import useFetchWords from "../hooks/useFetchWords";
import { useCountdown } from "../hooks/useCountdown";
import Keyboard from "./Keyboard";
import {Gameover} from "./Gameover";
import { SealedValidation } from "./SealedValidation";
import { useAtom } from "jotai";
import { characterAtom, gamemodeAtom, timeAtom } from "../store";
import { GameHeader } from "./GameHeader";

export function SealedGame() {
  const [character] = useAtom(characterAtom);
  const [time] = useAtom(timeAtom);
  const [gamemode] = useAtom(gamemodeAtom);
  const [input, setInput] = useState<string>(character);
  const [wordlist, setWordList] = useState<string[]>([]);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const { wordData } = useFetchWords();
  const { secondsLeft, start } = useCountdown();

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
      <div className="bg-neutral-900 flex flex-col w-svw h-svh justify-center items-center relative overflow-hidden">
        <GameHeader
          secondsLeft={secondsLeft}
          time={time}
          gamemode={gamemode}
          score={score}
        />
        <div className="flex items-center overflow-x-auto overflow-y-hidden flex-col flex-wrap max-h-32 absolute left-0 top-10 w-full">
          {wordlist.sort().map((value, i) => (
            <div
              key={value}
              className={`w-auto text-center m-0.5 ${
                value === input ? "bg-green-800 rounded" : ""
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
          className="select-none outline-none text-center text-2xl w-full overflow-scroll text-white bg-neutral-900"
          onChange={(e) => setInput(e.target.value.toUpperCase())}
        />
        {showAlert && (
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
      </div>
      {secondsLeft <= 0 && <Gameover score={score} handleRetry={handleRetry} />}
    </>
  );
}
