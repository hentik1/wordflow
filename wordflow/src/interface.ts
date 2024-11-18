export enum Mode {
  Default = "Default",
  Daily = "Dailuy",
}

export enum Gamemode {
  Sealed = "Sealed",
  Linked = "Linked",
  Complete = "Complete",
}

export enum TimeOptions {
  MINUTE_1 = 60,
  MINUTE_3 = 180,
}

export interface SealedValidationProps {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  character: string;
  wordlist: string[];
  setWordList: React.Dispatch<React.SetStateAction<string[]>>;
  words: string[];
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

export interface LinkedValidationProps {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  wordlist: string[];
  setWordList: React.Dispatch<React.SetStateAction<string[]>>;
  words: string[];
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

export interface CoundownBarProps {
  time?: number;
  secondsLeft: number;
}

export interface KeyboardProps {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: () => void;
}

export interface GameoverProps {
  score: number;
  handleRetry: () => void;
}

export interface IconProps {
  size: string;
}

export interface GameStatusProps {
  time?: number;
  secondsLeft?: number;
  score: number;
  gamemode: string;
}

export interface SealedWordlistProps {
  wordlist: string[];
  input: string;
}
