export enum Mode {
  Default = "Default",
  Daily = "Daily",
}

export enum Gamemode {
  Sealed = "Sealed",
  Linked = "Linked",
}

export enum Times {
  MINUTE_1 = 60,
  MINUTE_5 = 300,
}

export interface SealedProps {
  character: string;
  appVisible: boolean;
  setAppVisible: React.Dispatch<React.SetStateAction<boolean>>;
  time: Times;
}

export interface LinkedProps {
  setAppVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface DefaultConfigProps {
  character: string;
  setCharacter: React.Dispatch<React.SetStateAction<string>>;
  gamemode: string;
  setGamemode: React.Dispatch<React.SetStateAction<Gamemode>>;
  time: Times;
  setTime: React.Dispatch<React.SetStateAction<Times>>;
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
}

export interface GameoverProps {
  score: number;
  handleRetry: () => void;
  handleQuit: () => void;
}

export interface IconProps {
  width: string;
  height: string;
}
