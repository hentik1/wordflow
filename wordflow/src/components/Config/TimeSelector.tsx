import { useAtom } from "jotai";
import { timeData } from "../../data";
import { Gamemode } from "../../interface";
import { gamemodeAtom, timeAtom } from "../../store";

export function TimeSelector() {
  const [gamemode] = useAtom(gamemodeAtom);
  const [time, setTime] = useAtom(timeAtom);

  return (
    <div
      className={
        gamemode === Gamemode.Sealed ? "flex flex-row justify-center" : "hidden"
      }
    >
      {timeData.map((item) => (
        <div
          onClick={() => setTime(item.value)}
          key={item.key}
          className={`cursor-pointer m-4 p-2  rounded-xl text-xl flex flex-row justify-evenly w-28 border-2 bg-zinc-950  ${
            time === item.value
              ? "border-white border-2"
              : "border-zinc-950 border-2"
          }`}
        >
          <div className="relative right-2">{item.icon}</div>
          <div className="flex items-center">{item.view}</div>
        </div>
      ))}
    </div>
  );
}
