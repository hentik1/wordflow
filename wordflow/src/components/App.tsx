import { useEffect, useState } from "react";

import { Gamemode, Mode, Times } from "../interface";
import { optionsData } from "../data";
import DefaultConfig from "./DefaultConfig";
import SealedGame from "../components/SealedGame";
import Header from "./Header";
import ModeSelector from "./ModeSelector";
import { updateLocalStorage } from "../util";
import { alphabet } from "../data";

function App() {
  useEffect(() => {
    updateLocalStorage();
  }, []);

  // Must contain uppercase alphabet letter
  const [character, setCharacter] = useState<string>("A");

  const [appVisible, setAppVisible] = useState<boolean>(true);

  // Account Stats Info Settings
  const [toggledOption, setToggledOption] = useState<number | null>(null);

  // Default Daily
  const [toggledMode, setToggledMode] = useState<Mode>(Mode.Default);

  // Sealed Linked
  const [gamemode, setGamemode] = useState<Gamemode>(Gamemode.Sealed);

  const [time, setTime] = useState<Times>(Times.MINUTE_1);

  const handleStart = () => {
    if (gamemode === Gamemode.Sealed && alphabet.includes(character)) {
      setAppVisible(false);
    }
  };

  return (
    <>
      <div
        className={
          appVisible
            ? "absolute left-0 top-0 bg-neutral-900 h-full w-full flex flex-col justify-center items-center"
            : "hidden"
        }
      >
        <Header
          toggledOption={toggledOption}
          setToggledOption={setToggledOption}
        />

        <ModeSelector
          toggledMode={toggledMode}
          setToggledMode={setToggledMode}
        />

        {toggledMode === Mode.Default ? (
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
          <div className="font-bold text-2xl">Start</div>
        </div>
      </div>

      {!appVisible && gamemode === Gamemode.Sealed ? (
        <SealedGame
          character={character}
          appVisible={false}
          setAppVisible={setAppVisible}
          time={time}
        />
      ) : null}

      {toggledOption !== null && optionsData[toggledOption].component}
    </>
  );
}

export default App;
