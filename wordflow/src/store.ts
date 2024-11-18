import { atom } from "jotai";
import { Gamemode, TimeOptions } from "./interface";

export const characterAtom = atom<string>("A");
export const timeAtom = atom<TimeOptions>(TimeOptions.MINUTE_1);
export const gamemodeAtom = atom<Gamemode>(Gamemode.Sealed);
