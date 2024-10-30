import Account from "./components/Account";
import Stats from "./components/Stats";
import Info from "./components/Info";
import Settings from "./components/Settings";
import AccountIcon from "./assets/AccountIcon";
import StatsIcon from "./assets/StatsIcon";
import QuestionIcon from "./assets/QuestionIcon";
import SettingsIcon from "./assets/SettingsIcon";
import SprintIcon from "./assets/SprintIcon";
import EnduranceIcon from "./assets/EnduranceIcon";
import { Times } from "./interface";
import Logo from "./assets/Logo";

export const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
export const keyboardLayout = ["QWERTYUIOP", "ASDFGHJKL", "1ZXCVBNM2"];

export const alerts = {
  Length: "Word must have 4 or more letters",
  NotFound: " not found",
  StartingCharacter: "Word has to start with ",
  AlreadyFound: " already found",
};

export const optionsData = [
  {
    key: "Account",
    style: "absolute left-4 cursor-pointer",
    icon: <AccountIcon />,
  },
  {
    key: "Stats",
    style: "absolute left-16 cursor-pointer",
    icon: <StatsIcon />,
  },
  {
    key: "",
    style: "flex justify-center items-center",
    icon: <Logo />,
  },
  {
    key: "Info",
    style: "absolute right-16 cursor-pointer",
    icon: <QuestionIcon />,
  },
  {
    key: "Settings",
    style: "absolute right-4 cursor-pointer",
    icon: <SettingsIcon />,
  },
];

export const timeData = [
  {
    key: "1min",
    value: Times.MINUTE_1,
    icon: <SprintIcon />,
    view: "1:00",
  },
  {
    key: "5min",
    value: Times.MINUTE_5,
    icon: <EnduranceIcon />,
    view: "5:00",
  },
];
