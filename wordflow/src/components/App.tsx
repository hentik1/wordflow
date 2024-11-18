import { useEffect } from "react";
import { updateLocalStorage } from "../util";
import { StartButton } from "./Config/StartButton";
import { Config } from "./Config/Config";
import { Header } from "./Header/Header";

export function App() {
  useEffect(() => {
    updateLocalStorage();
  }, []);

  return (
    <div className="content">
      <Header />
      <Config />
      <StartButton />
    </div>
  );
}
