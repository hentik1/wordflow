import { keyboardSequence } from "../data";
import BackspaceIcon from "../assets/BackspaceIcon";
import EnterIcon from "../assets/EnterIcon";
import { KeyboardProps } from "../interface";

function Keyboard({
  input,
  setInput,
  handleSubmit,
}: KeyboardProps) {
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

  return (
    <div className="absolute top-3/4">
      <div className="flex flex-row justify-center w-screen">
        {keyboardSequence[0].split("").map((char, _) => (
          <div
            key={char}
            onClick={() => handlePress(char)}
            className="p-2 bg-gray-500 m-0.5 text-center w-7 cursor-pointer rounded"
          >
            {char}
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-center w-screen">
        {keyboardSequence[1].split("").map((char, _) => (
          <div
            key={char}
            onClick={() => handlePress(char)}
            className="p-2 bg-gray-500 m-0.5 text-center w-7 cursor-pointer rounded"
          >
            {char}
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-center w-screen">
        {keyboardSequence[2].split("").map((char, _) =>
          char === "1" ? (
            <div
              key={char}
              onClick={() => handleAction("enter")}
              className="p-2 bg-gray-500 m-0.5 w-11 cursor-pointer rounded"
            >
              <EnterIcon />
            </div>
          ) : char === "2" ? (
            <div
              key={char}
              onClick={() => handleAction("del")}
              className="p-2 bg-gray-500 m-0.5 w-11 cursor-pointer rounded"
            >
              <BackspaceIcon />
            </div>
          ) : (
            <div
              key={char}
              onClick={() => handlePress(char)}
              className="p-2 bg-gray-500 m-0.5 text-center w-7 cursor-pointer rounded"
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
