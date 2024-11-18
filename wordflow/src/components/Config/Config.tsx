import { Tabs, TabsTrigger, TabsList, TabsContent } from "../../ui/tabs";
import { DefaultConfig } from "./DefaultConfig";
import { DailyConfig } from "./DailyConfig";

export function Config() {
  return (
    <Tabs
      className="absolute top-20 flex flex-col items-center"
      defaultValue="default"
    >
      <TabsList>
        <TabsTrigger value="default">Default</TabsTrigger>
        <TabsTrigger value="daily">Daily</TabsTrigger>
      </TabsList>
      <TabsContent value="default">
        <DefaultConfig />
      </TabsContent>
      <TabsContent value="daily">
        <DailyConfig />
      </TabsContent>
    </Tabs>
  );
}
