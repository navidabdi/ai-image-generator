import { atom } from "recoil";
import { useThemeDetector } from "../utils";

export const darkModeAtom = atom({
  key: "darkModeAtom",
  default: useThemeDetector,
});
