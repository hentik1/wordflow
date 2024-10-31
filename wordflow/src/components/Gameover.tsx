import { Link } from "react-router-dom";
import { GameoverProps } from "../interface";

export function Gameover({ score, handleRetry }: GameoverProps) {
  return (
    <div
      className={
        "absolute left-0 top-0 bg-neutral-900 flex flex-col w-screen h-screen justify-center items-center z-50"
      }
    >
      <div className="bg-zinc-950 flex flex-col items-center rounded-xl">
        <div className="text-3xl border-b-2 w-full text-center">
          Score {score}
        </div>
        <div className="flex flex-row">
          <Link to="/">
            <div className="text-3xl cursor-pointer p-2 m-2">Quit</div>
          </Link>
          <div
            className="text-3xl cursor-pointer p-2 m-2"
            onClick={handleRetry}
          >
            Retry
          </div>
        </div>
      </div>
    </div>
  );
}
