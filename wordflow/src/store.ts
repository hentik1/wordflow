import { atom } from "jotai";
import { Gamemode, Times } from "./interface";

export const characterAtom = atom<string>("A");
export const timeAtom = atom<Times>(Times.MINUTE_1);
export const gamemodeAtom = atom<Gamemode>(Gamemode.Sealed);
