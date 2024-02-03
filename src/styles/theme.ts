import { DefaultTheme } from 'styled-components';

export interface CustomTheme extends DefaultTheme {
  colors: {
    silverGray: string;
    gray: string;
    midGray: string;
    darkGray: string;
    white: string;
    tealBlue: string;
    background: {
      lightGray: string;
      darkGray: string;
      lightGrayish: string;
      white: string;
      crystalWhite: string;
      pearlGray: string;
      softGreen: string;
      redCoral: string;
    };
    border: string;
  };
  font: {
    roboto: string;
  };
}

const theme: CustomTheme = {
  colors: {
    silverGray: "#DBDBDB",
    gray: "#848484",
    midGray: "rgba(227, 79, 79, 1)",
    darkGray: "#555555",
    white: "#FFFFFF",
    tealBlue: "#4DA6B3",

    background: {
      lightGray: "#E4E4E4",
      darkGray: "#555555",
      softGreen: "#5DE290",
      redCoral: "#E34F4F",
      crystalWhite: "#F7F7F7",
      pearlGray: "#F7F7F8",
      lightGrayish: "#F4F4F4",
      white: "#FFFFFF",
    },
    border: "1px solid",
  },
  font: {
    roboto: "Roboto, sans-serif",
  },
};

export { theme };
