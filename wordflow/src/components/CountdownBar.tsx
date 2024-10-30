import { CoundownBarProps } from "../interface";

function CoundownBar({ secondsLeft, time }: CoundownBarProps) {
  const countdownBarColor = (secondsLeft: number, time: number) => {
    if ((secondsLeft / time) * 100 > 50) {
      return "green";
    } else if ((secondsLeft / time) * 100 > 25) {
      return "yellow";
    }
    return "red";
  };

  return (
    <>
      {localStorage.getItem("visualclock") === "true" ? (
        <div
          className={
            "border-t-4 absolute top-0 left-0 duration-100 ease-linear"
          }
          style={{
            width: `${(secondsLeft / time) * 100}%`,
            borderColor: countdownBarColor(secondsLeft, time),
          }}
        ></div>
      ) : (
        <div className={"absolute top-0 left-0 duration-100 ease-linear p-2"}>
          {secondsLeft.toFixed(1)}
        </div>
      )}
    </>
  );
}

export default CoundownBar;
