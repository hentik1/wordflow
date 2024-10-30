import { GameoverProps } from "../interface";

function Gameover({ score, handleRetry, handleQuit }: GameoverProps) {
  return (
    <div
      className={
        "absolute left-0 top-0 bg-neutral-900 flex flex-col w-screen h-screen justify-center items-center z-50"
      }
    >
      <div className="text-3xl">Score: {score}</div>
      <div className="flex flex-row">
        <div
          className="text-3xl cursor-pointer p-2 m-2 text-red-400"
          onClick={handleQuit}
        >
          Quit
        </div>
        <div
          className="text-3xl cursor-pointer p-2 m-2 text-green-400"
          onClick={handleRetry}
        >
          Retry
        </div>
      </div>
    </div>
  );
}

export default Gameover;
