import { AlphabetScroller } from "./AlphabetScroller";
import { GamemodeSelector } from "./GamemodeSelector";
import { TimeSelector } from "./TImeSelector";

export function DefaultConfig() {
  return (
    <div className="h-3/5 flex flex-col justify-start">
      <GamemodeSelector />
      <TimeSelector />
      <AlphabetScroller />
    </div>
  );
}
