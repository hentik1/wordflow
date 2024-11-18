import { useRef } from "react";
import { alphabet } from "../../data";
import { Gamemode } from "../../interface";
import { useAtom } from "jotai";
import { characterAtom, gamemodeAtom } from "../../store";

export function AlphabetScroller() {
  const [character, setCharacter] = useAtom(characterAtom);
  const [gamemode] = useAtom(gamemodeAtom);
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

  return (
    <div
      className={
        gamemode === Gamemode.Sealed ? "flex flex-row items-center" : "hidden"
      }
    >
      <div
        onClick={() => scroll("left")}
        className="text-xl h-12 w-6 rounded flex justify-center items-center m-1 mb-3.5 cursor-pointer font-bold"
      >
        <div>{"<"}</div>
      </div>
      <div
        ref={scrollRef}
        className="scroll-smooth flex flex-row items-center min-h-20 max-w-[280px] overflow-x-auto"
      >
        {alphabet.split("").map((char, index) => (
          <div
            className={`font-bold cursor-pointer min-w-12 h-12 flex items-center justify-center m-1 rounded-full border-2 border-secondary ${
              alphabet[index] === character
                ? "bg-secondary"
                : "hover:bg-secondary duration-200"
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
  );
}
