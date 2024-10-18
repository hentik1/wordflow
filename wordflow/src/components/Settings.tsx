import { useState } from "react";

function Settings() {
  const [keyboard, setKeyboard] = useState(
    localStorage.getItem("keyboard") === "true"
  );

  const updateKeyboard = () => {
    localStorage.setItem("keyboard", (!keyboard).toString());
    setKeyboard(!keyboard);
  };

  return (
    <>
      <div className="flex justify-center items-center flex-col absolute left-0 top-16 w-full h-[calc(100%-64px)] z-50 bg-neutral-900 overflow-hidden">
        <div className="flex flex-row justify-center items-center w-full">
          <div className="text-2xl m-2">Keypad</div>
          <div
            onClick={() => updateKeyboard()}
            className={`h-12 w-24 p-1 rounded-full flex flex-row" ${
              keyboard
                ? "bg-green-600 justify-end flex-row-reverse"
                : "bg-red-600"
            }`}
          >
            <div className="w-10 bg-neutral-900 rounded-full"></div>
            <div className="w-10 text-neutral-900 font-black text-xl flex items-center justify-center">
              {keyboard ? "ON" : "OFF"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
