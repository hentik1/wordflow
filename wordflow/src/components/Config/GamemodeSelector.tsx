import { useAtom } from "jotai";
import { gamemodeAtom } from "../../store";
import { gamemodeData } from "../../data";
import { Tabs, TabsList, TabsTrigger } from "../../ui/tabs";

export function GamemodeSelector() {
  const [gamemode, setGamemode] = useAtom(gamemodeAtom);

  return (
    <Tabs className="flex justify-center" defaultValue={gamemode.toLowerCase()}>
      <TabsList>
        {gamemodeData.map((item) => (
          <TabsTrigger
            key={item.value}
            onClick={() => setGamemode(item.value)}
            value={item.key}
          >
            {item.icon}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
