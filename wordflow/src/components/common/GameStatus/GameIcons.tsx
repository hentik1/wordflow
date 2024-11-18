import { useAtom } from "jotai";

import { Gamemode } from "../../../interface";
import { gamemodeAtom, timeAtom } from "../../../store";
import { gamemodeData, timeData } from "../../../data";

export function GameIcons() {
  const [time] = useAtom(timeAtom);
  const [gamemode] = useAtom(gamemodeAtom);

  return (
    <>
      {timeData.map((t) =>
        t.value === time && gamemode === Gamemode.Sealed ? (
          <div key={t.value}>{t.icon}</div>
        ) : null
      )}
      {gamemodeData.map((g) =>
        g.value === gamemode ? <div key={g.value}>{g.icon}</div> : null
      )}
    </>
  );
}
