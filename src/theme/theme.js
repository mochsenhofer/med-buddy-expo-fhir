import { MD3LightTheme as DefaultTheme } from "react-native-paper";
import {
  darkBlue,
  white,
  medBuddyBlue,
  backgroundWhite,
  black,
} from "./colors";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: darkBlue,
    secondary: white,
    tertiary: medBuddyBlue,
    background: backgroundWhite,
    text: black,
    outline: darkBlue,
  },
};

export default theme;
