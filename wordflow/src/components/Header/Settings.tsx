import { useState } from "react";
import { Header } from "./Header";

function Settings() {
  const [keyboard, setKeyboard] = useState<boolean>(
    localStorage.getItem("keyboard") === "true"
  );

  const [visualClock, setVisualClock] = useState<boolean>(
    localStorage.getItem("visualclock") === "true"
  );

  const updateKeyboard = () => {
    localStorage.setItem("keyboard", (!keyboard).toString());
    setKeyboard(!keyboard);
  };

  const updateVisualClock = () => {
    localStorage.setItem("visualclock", (!visualClock).toString());
    setVisualClock(!visualClock);
  };

  return (
    <>
      <Header />
      <div className="flex justify-center items-center flex-col absolute left-0 top-16 w-full h-[calc(100%-64px)] z-50 bg-neutral-900 overflow-hidden">
        <div className="flex flex-row justify-between items-center w-80 p-2 m-2 bg-zinc-950 rounded">
          <div className="text-2xl font-semibold m-2 p-2 flex">Keyboard</div>
          <div
            onClick={() => updateKeyboard()}
            className={`h-12 w-24 p-1 rounded-full flex flex-row" ${
              keyboard ? "bg-green-600 flex-row-reverse" : "bg-red-600"
            }`}
          >
            <div className="w-10 bg-neutral-900 rounded-full cursor-pointer"></div>
            <div className="w-10 text-neutral-900 font-black text-xl flex items-center justify-center cursor-pointer">
              {keyboard ? "ON" : "OFF"}
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center w-80 p-2 m-2 bg-zinc-950 rounded">
          <div className="text-2xl font-semibold m-2 p-2 flex">
            Visual Clock
          </div>
          <div
            onClick={() => updateVisualClock()}
            className={`h-12 w-24 p-1 rounded-full flex flex-row" ${
              visualClock ? "bg-green-600 flex-row-reverse" : "bg-red-600"
            }`}
          >
            <div className="w-10 bg-neutral-900 rounded-full cursor-pointer"></div>
            <div className="w-10 text-neutral-900 font-black text-xl flex items-center justify-center cursor-pointer">
              {visualClock ? "ON" : "OFF"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
