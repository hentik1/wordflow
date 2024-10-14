import { RefObject } from "react";

export interface SealedProps {
  character: string;
  appVisible: boolean;
  setAppVisible: React.Dispatch<React.SetStateAction<boolean>>;
  gamemode: string;
  time: 60 | 360;
  setTime: React.Dispatch<React.SetStateAction<60 | 360>>;
}

export enum Mode {
  DEFAULT = "DEFAULT",
  DAILY = "DAILY",
}

export enum Gamemode {
  LINKED = "LINKED",
  SEALED = "SEALED",
}

export interface DefaultConfigProps {
  character: string;
  setCharacter: React.Dispatch<React.SetStateAction<string>>;
  gamemode: string;
  setGamemode: React.Dispatch<React.SetStateAction<Gamemode>>;
  time: 60 | 360;
  setTime: React.Dispatch<React.SetStateAction<60 | 360>>;
}

export interface ValidationProps {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  character: string;
  wordlist: string[];
  setWordList: React.Dispatch<React.SetStateAction<string[]>>;
  wordData: string[];
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

export interface HeaderProps {
  toggledOption: number | null;
  setToggledOption: React.Dispatch<React.SetStateAction<number | null>>;
}

export interface ModeProps {
  toggledMode: Mode;
  setToggledMode: React.Dispatch<React.SetStateAction<Mode>>;
}

export interface CoundownBarProps {
  time: number;
  secondsLeft: number;
}

export interface KeyboardProps {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: () => void;
  autoFocusInput: () => void;
}
