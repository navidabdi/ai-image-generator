import { atom } from "recoil";
import { checkTheme } from "../utils";

export const darkModeAtom = atom({
  key: "darkModeAtom",
  default: checkTheme,
});
