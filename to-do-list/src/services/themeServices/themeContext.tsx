import { createContext } from "react";
import LightTheme from "../../styles/themes/LightTheme";
import useContinuousState from "./UseContinuousState";
import { DefaultTheme } from "styled-components";
import DarkTheme from "../../styles/themes/DarkTheme";


export const ThemeContext = createContext({
  theme: LightTheme,
  toggleTheme: () => { },
});

export const UseThemeContext = () => {
  const [theme, setTheme] = useContinuousState<DefaultTheme>('theme', LightTheme)

  const toggleTheme = () => {
    setTheme(theme.title === 'lightTheme' ? DarkTheme : LightTheme)
  }

  return { theme, toggleTheme }
};
