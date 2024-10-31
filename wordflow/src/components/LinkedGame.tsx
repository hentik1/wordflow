import { useEffect, useState } from "react";
import Gameover from "./Gameover";
import Keyboard from "./Keyboard";
import useFetchWords from "../hooks/useFetchWords";
import { alphabet } from "../data";
import LinkedValidation from "./LinkedValidation";
import { Link } from "react-router-dom";

function LinkedGame() {
  const [input, setInput] = useState<string>("");
  const [wordlist, setWordList] = useState<string[]>([]);
  const [toggleAlert, setToggleAlert] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [hearts, setHearts] = useState<number>(3);

  const { wordData } = useFetchWords();

  const handleRetry = () => {
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
        <div className="absolute top-0 flex flex-row w-full justify-evenly p-2">
          <div>{score}</div>
        </div>

        <div className="flex items-center justify-right flex-row overflow-hidden absolute left-0 top-20 w-1/2">
          {wordlist.map((value, i) => (
            <div key={value} className={"w-auto text-center m-0.5"}>
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
          <LinkedValidation
            input={input}
            setInput={setInput}
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
        <Link to="/">
          <div className="mt-16 text-3xl cursor-pointer max-w-64">Quit</div>
        </Link>
      </div>

      {hearts === 0 && <Gameover score={score} handleRetry={handleRetry} />}
    </>
  );
}

export default LinkedGame;
