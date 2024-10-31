import { Link } from "react-router-dom";
import { CrossIcon } from "../assets/CrossIcon";
import { EnduranceIcon } from "../assets/EnduranceIcon";
import { LinkedIcon } from "../assets/LinkedIcon";
import { SealedIcon } from "../assets/SealedIcon";
import { SprintIcon } from "../assets/SprintIcon";
import { Times, Gamemode, GameHeaderProps } from "../interface";
import { CountdownBar } from "./CountdownBar";

export function GameHeader({
  secondsLeft,
  time,
  gamemode,
  score,
}: GameHeaderProps) {
  return (
    <div className="absolute top-0 flex flex-row w-full justify-end p-2">
      <CountdownBar secondsLeft={secondsLeft} time={time} />
      <div>
        {time === Times.MINUTE_1 ? (
          <SprintIcon width="24px" height="24px" />
        ) : (
          <EnduranceIcon width="24px" height="24px" />
        )}
      </div>
      <div>
        {gamemode === Gamemode.Sealed ? (
          <SealedIcon width="24px" height="24px" />
        ) : (
          <LinkedIcon width="24px" height="24px" />
        )}
      </div>

      <div className="flex justify-center absolute top-1 left-[calc(50%-8px)] text-lg w-4">
        {score}
      </div>

      <Link className="absolute top-1 left-0" to="/">
        <CrossIcon />
      </Link>
    </div>
  );
}
