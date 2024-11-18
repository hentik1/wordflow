import { useState } from "react";
import { Header } from "./Header";
import { Switch } from "../../ui/switch";

export function Settings() {
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
      <div className="flex justify-center items-center flex-col absolute left-0 top-16 w-full h-[calc(100%-64px)]">
        <div className="flex flex-col items-center p-2 m-2 rounded text-xl">
          <div className="flex flex-row justify-between w-42 m-2 text-center">
            <div className="w-32">Keyboard</div>
            <Switch checked={keyboard} onClick={() => updateKeyboard()} />
          </div>
          <div className="flex flex-row justify-between w-42 m-2 text-center">
            <div className="w-32">Visual Clock</div>
            <Switch checked={visualClock} onClick={() => updateVisualClock()} />
          </div>
        </div>
      </div>
    </>
  );
}
