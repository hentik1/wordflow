import { useRef } from "react";
import { DefaultConfigProps, Gamemode } from "../interface";
import { timeData } from "../data";
import LinkedIcon from "../assets/LinkedIcon";
import SealedIcon from "../assets/SealedIcon";
import { alphabet } from "../data";

function DefaultConfig({
  character,
  setCharacter,
  gamemode,
  setGamemode,
  time,
  setTime,
}: DefaultConfigProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: string) => {
    if (scrollRef.current) {
      if (direction == "left") {
        scrollRef.current.scrollLeft -= 280;
      } else {
        scrollRef.current.scrollLeft += 280;
      }
    }
  };

  const gamemodeIcons = [<LinkedIcon />, <SealedIcon />];

  return (
    <div className="h-3/5 flex flex-col justify-start">
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
            <div className="flex items-center">
              {value.charAt(0) + value.toLowerCase().slice(1)}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-center">
        {timeData.map((item) => (
          <div
            onClick={() => setTime(item.value as 60 | 360)}
            key={item.key}
            className={`cursor-pointer m-4 p-2  rounded-xl text-xl flex flex-row justify-evenly w-28 border-2 bg-zinc-950 ${
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

      <div
        className={
          gamemode === Gamemode.SEALED
            ? "flex flex-row items-center"
            : "invisible"
        }
      >
        <div
          onClick={() => scroll("left")}
          className="text-xl bg-zinc-950 h-12 w-6 rounded flex justify-center items-center m-1 mb-3.5 cursor-pointer font-bold"
        >
          <div>{"<"}</div>
        </div>
        <div
          ref={scrollRef}
          className="scroll-smooth flex flex-row items-center min-h-20 max-w-[280px] overflow-x-auto"
        >
          {alphabet.split("").map((char, index) => (
            <div
              className={`bg-zinc-950 font-bold cursor-pointer min-w-12 h-12 flex items-center justify-center m-1 text-white rounded ${
                alphabet[index] === character ? "border-2" : "border-0"
              }`}
              key={index}
              onClick={() => setCharacter(alphabet[index])}
            >
              <div>{char}</div>
            </div>
          ))}
        </div>
        <div
          onClick={() => scroll("right")}
          className={
            "text-xl bg-zinc-950 h-12 w-6 rounded flex justify-center items-center m-1 mb-3.5 cursor-pointer font-bold"
          }
        >
          <div>{">"}</div>
        </div>
      </div>
    </div>
  );
}

export default DefaultConfig;
