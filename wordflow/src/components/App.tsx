import { useState } from "react";

import { Gamemode, Mode } from "../interface";
import { optionsData } from "../data";
import DefaultConfig from "./DefaultConfig";
import SealedGame from "../components/SealedGame";
import Header from "./Header";
import ModeSelector from "./ModeSelector";

function App() {
  const [character, setCharacter] = useState<string>("A");
  const [appVisible, setAppVisible] = useState<boolean>(true);

  // Account Stats Info Settings
  const [toggledOption, setToggledOption] = useState<number | null>(null);

  // Default Daily
  const [toggledMode, setToggledMode] = useState<Mode>(Mode.DEFAULT);

  // Sealed Linked
  const [gamemode, setGamemode] = useState<Gamemode>(Gamemode.SEALED);
  const [time, setTime] = useState<60 | 360>(60);

  const handleStart = () => {
    if (gamemode === Gamemode.SEALED) {
      setAppVisible(false);
    }
  };

  return (
    <>
      <div
        className={`absolute left-0 top-0 bg-neutral-900 h-full w-full flex flex-col justify-center items-center ${
          appVisible ? "" : "hidden"
        }`}
      >
        <Header
          toggledOption={toggledOption}
          setToggledOption={setToggledOption}
        />

        <ModeSelector
          toggledMode={toggledMode}
          setToggledMode={setToggledMode}
        />

        {toggledMode === Mode.DEFAULT ? (
          <DefaultConfig
            character={character}
            setCharacter={setCharacter}
            gamemode={gamemode}
            setGamemode={setGamemode}
            time={time}
            setTime={setTime}
          />
        ) : null}

        <div
          onClick={handleStart}
          className="absolute top-[calc(100%-80px)] bg-zinc-950 w-28 h-16 rounded flex justify-center items-center cursor-pointer"
        >
          <div className="font-black text-2xl">Start</div>
        </div>
      </div>

      {appVisible === false && gamemode === Gamemode.SEALED ? (
        <SealedGame
          character={character}
          appVisible={false}
          setAppVisible={setAppVisible}
          gamemode={gamemode}
          time={time}
          setTime={setTime}
        />
      ) : null}

      {toggledOption !== null && optionsData[toggledOption].component}
    </>
  );
}

export default App;
