import { Link } from "react-router-dom";
import { CountdownBar } from "../CountdownBar";
import { GameStatusProps } from "../../../interface";
import { CrossIcon } from "../../../assets/CrossIcon";
import { GameIcons } from "./GameIcons";
import { useMemo } from "react";

export function GameStatus({ secondsLeft, time, score }: GameStatusProps) {
  const memoizedIcons = useMemo(() => <GameIcons />, []);

  return (
    <div className="absolute top-0 flex flex-row w-full justify-end p-2">
      {secondsLeft && time && (
        <CountdownBar secondsLeft={secondsLeft} time={time} />
      )}
      <Link className="absolute top-0 left-0" to="/wordflow/">
        <CrossIcon />
      </Link> 
      <div className="absolute top-0 left-[calc(50%-8px)] text-lg w-4">
        {score}
      </div>

      {memoizedIcons}
    </div>
  );
}
