import { DefaultTheme } from "styled-components";

export type themeInterface = DefaultTheme & {
  colors: {
    white: string;
    grey: string;
    green:string;
    red:string;
    blue:string;
    border:string;
    inactive:string;
    progressToFill:string;
    orange:string;
    darker:string;
  };
  fontFamily: string;
};

export const mainTheme: themeInterface = {
  colors: {
    white: "#fff",
    grey: "#848484",
    green: "#5DE290",
    red: "#E34F4F",
    blue: "#4DA6B3",
    border: "#DBDBDB",
    inactive: "#f4f4f4",
    progressToFill: "555",
    orange: "#FDA50F",
    darker: "#555",
  },
  fontFamily: "'Roboto', sans-serif",
};