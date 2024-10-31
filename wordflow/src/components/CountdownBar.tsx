import { CoundownBarProps } from "../interface";

export function CountdownBar({ secondsLeft, time }: CoundownBarProps) {
  const timeLeft = (secondsLeft / time) * 100;

  return (
    <>
      {localStorage.getItem("visualclock") === "true" ? (
        <div
          className={
            "border-t-4 absolute top-0 left-0 duration-100 ease-linear"
          }
          style={{
            width: timeLeft + "%",
            borderColor:
              timeLeft > 50 ? "green" : timeLeft > 25 ? "yellow" : "red",
          }}
        ></div>
      ) : (
        <div className={"absolute top-0 right-12 duration-100 ease-linear p-2"}>
          {secondsLeft.toFixed(1)}
        </div>
      )}
    </>
  );
}
