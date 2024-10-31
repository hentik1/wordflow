import { useEffect, useState } from "react";
import { Mode } from "../interface";
import { DefaultConfig } from "./Config/DefaultConfig";
import { Config } from "./Config/Config";
import { updateLocalStorage } from "../util";
import { Link } from "react-router-dom";
import { gamemodeAtom } from "../store";
import { useAtom } from "jotai";
import { DailyConfig } from "./Config/DailyConfig";
import { Header } from "./Header/Header";

export function App() {
  useEffect(() => {
    updateLocalStorage();
  }, []);

  const [toggledConfig, setToggledConfig] = useState<Mode>(Mode.Default);
  const [gamemode] = useAtom(gamemodeAtom);

  // trenger ikke arrow func
  // size
  // -> Gamestatus
  return (
    <div className="absolute left-0 top-0 bg-neutral-900 h-full w-full flex flex-col justify-center items-center">
      <Header />
      <Config
        toggledConfig={toggledConfig}
        setToggledConfig={setToggledConfig}
      />
      {toggledConfig === Mode.Default ? <DefaultConfig /> : <DailyConfig />}
      <Link
        className="absolute top-[calc(100%-80px)] bg-zinc-950 w-28 h-16 rounded flex justify-center items-center cursor-pointer"
        to={gamemode}
      >
        <div className="font-bold text-2xl">Start</div>
      </Link>
    </div>
  );
}
