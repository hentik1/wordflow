import { AlphabetScroller } from "./AlphabetScroller";
import { GamemodeSelector } from "./GamemodeSelector";
import { TimeSelector } from "./TimeSelector";

export function DefaultConfig() {
  return (
    <>
      <GamemodeSelector />
      <TimeSelector />
      <AlphabetScroller />
    </>
  );
}
