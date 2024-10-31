import { useAtom } from "jotai";
import { LinkedIcon } from "../../assets/LinkedIcon";
import { SealedIcon } from "../../assets/SealedIcon";
import { Gamemode } from "../../interface";
import { gamemodeAtom } from "../../store";

export function GamemodeSelector() {
  const [gamemode, setGamemode] = useAtom(gamemodeAtom);

  const gamemodeIcons = [
    <SealedIcon width="32px" height="32px" />,
    <LinkedIcon width="32px" height="32px" />,
  ];
  
  return (
    <div className="flex flex-col w-full justify-center items-center">
      {(Object.keys(Gamemode) as Array<Gamemode>).map((value, index) => (
        <div
          key={index}
          onClick={() => setGamemode(value)}
          className={`cursor-pointer m-4 p-2 rounded-xl text-xl flex flex-row justify-evenly w-40 bg-zinc-950  ${
            gamemode === value
              ? "border-white border-2"
              : "border-zinc-950 border-2"
          }`}
        >
          <div className="relative right-2">{gamemodeIcons[index]}</div>
          <div className="flex items-center">{value}</div>
        </div>
      ))}
    </div>
  );
}
