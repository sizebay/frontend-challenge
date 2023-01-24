import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      roboto: string;
    };
    colors: {
      primary: string;
      green: string;
      red: string;
      blue: string;
      white: string;
      background: {
        primary: string;
        secondary: string;
        tertiary: string;
        filter: string;
      };
      border: string;
    };
  }
}
