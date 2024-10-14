import { useEffect, useState } from "react";

export default function useCountdown() {
  const [secondsLeft, setSecondsLeft] = useState<number>(0);

  useEffect(() => {
    if (secondsLeft <= 0) return;

    const timeout = setTimeout(() => {
      setSecondsLeft(secondsLeft - 0.01);
    }, 10);

    return () => clearTimeout(timeout);
  }, [secondsLeft]);

  function start(seconds: number) {
    setSecondsLeft(seconds);
  }
  function stop() {
    setSecondsLeft(0);
  }

  return { secondsLeft, start, stop };
}
