import { CoundownBarProps } from "../interface";

function CoundownBar({ secondsLeft, time }: CoundownBarProps) {
  const getCountdownBarColor = (secondsLeft: number, time: number) => {
    if ((secondsLeft / time) * 100 > 50) {
      return "green";
    } else if ((secondsLeft / time) * 100 > 25) {
      return "yellow";
    }
    return "red";
  };

  return (
    <div
      className={`border-t-4 absolute top-0 left-0 duration-100 ease-linear`}
      style={{
        width: `${(secondsLeft / time) * 100}%`,
        borderColor: getCountdownBarColor(secondsLeft, time),
      }}
    ></div>
  );
}

export default CoundownBar;
