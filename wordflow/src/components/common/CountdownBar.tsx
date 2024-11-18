import { CoundownBarProps } from "../../interface";
import { Progress } from "../../ui/progress";

export function CountdownBar({ secondsLeft, time }: CoundownBarProps) {
  return (
    <>
      {localStorage.getItem("visualclock") === "true" && secondsLeft && time ? (
        <Progress value={100 * (secondsLeft / time)} />
      ) : (
        <>{secondsLeft.toFixed(1)}</>
      )}
    </>
  );
}
