export enum Mode {
  Default = "Default",
  Daily = "Daily",
}

export enum Gamemode {
  Sealed = "Sealed",
  Linked = "Linked",
}

export enum Times {
  MINUTE_1 = 5,
  MINUTE_5 = 300,
}

export interface SealedValidationProps {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  character: string;
  wordlist: string[];
  setWordList: React.Dispatch<React.SetStateAction<string[]>>;
  wordData: string[];
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

export interface LinkedValidationProps {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  wordlist: string[];
  setWordList: React.Dispatch<React.SetStateAction<string[]>>;
  wordData: string[];
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

export interface ConfigProps {
  toggledConfig: Mode;
  setToggledConfig: React.Dispatch<React.SetStateAction<Mode>>;
}

export interface CoundownBarProps {
  time: number;
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
  width: string;
  height: string;
}

export interface GameHeaderProps {
  time: number;
  secondsLeft: number;
  score: number;
  gamemode: string;
}
