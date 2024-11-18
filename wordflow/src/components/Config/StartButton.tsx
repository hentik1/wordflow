import { useAtom } from "jotai";
import { Link } from "react-router-dom";
import { gamemodeAtom } from "../../store";
import { Button } from "../../ui/button";

export function StartButton() {
  const [gamemode] = useAtom(gamemodeAtom);
  return (
    <Link
      className="absolute top-[calc(100%-80px)]"
      to={`/wordflow/${gamemode}`}
    >
      <Button size="lg">Play {gamemode}</Button>
    </Link>
  );
}
