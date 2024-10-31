import { alphabet, keyboardLayout } from "../data";
import { BackspaceIcon } from "../assets/BackspaceIcon";
import { EnterIcon } from "../assets/EnterIcon";
import { KeyboardProps } from "../interface";
import { useEffect } from "react";

function Keyboard({ input, setInput, handleSubmit }: KeyboardProps) {
  const handlePress = (s: string) => {
    setInput(input + s);
  };

  const handleAction = (key: string) => {
    if (key === "enter") {
      handleSubmit();
    } else if (input.length < 2) {
      return;
    } else if (key === "del") {
      setInput(input.slice(0, input.length - 1));
    }
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
    <div
      className={
        localStorage.getItem("keyboard") === "true"
          ? "absolute top-3/4"
          : "hidden"
      }
    >
      <div className="flex flex-row justify-center w-screen">
        {keyboardLayout[0].split("").map((char, _) => (
          <div
            key={char}
            onClick={() => handlePress(char)}
            className="p-2 bg-gray-500 m-0.5 text-center h-12 w-9 cursor-pointer rounded flex justify-center items-center text-xl"
          >
            {char}
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-center w-screen">
        {keyboardLayout[1].split("").map((char, _) => (
          <div
            key={char}
            onClick={() => handlePress(char)}
            className="p-2 bg-gray-500 m-0.5 text-center h-12 w-9 cursor-pointer rounded flex justify-center items-center text-xl"
          >
            {char}
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-center w-screen">
        {keyboardLayout[2].split("").map((char, _) =>
          char === "1" ? (
            <div
              key={char}
              onClick={() => handleAction("enter")}
              className="p-2 bg-gray-500 m-0.5 h-12 w-14 cursor-pointer rounded flex justify-center items-center"
            >
              <EnterIcon />
            </div>
          ) : char === "2" ? (
            <div
              key={char}
              onClick={() => handleAction("del")}
              className="p-2 bg-gray-500 m-0.5 w-14 cursor-pointer rounded flex justify-center items-center"
            >
              <BackspaceIcon />
            </div>
          ) : (
            <div
              key={char}
              onClick={() => handlePress(char)}
              className="p-2 bg-gray-500 m-0.5 text-center w-9 cursor-pointer rounded flex justify-center items-center text-xl"
            >
              {char}
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Keyboard;
