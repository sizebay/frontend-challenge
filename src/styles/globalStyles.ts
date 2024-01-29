import { createGlobalStyle } from "styled-components";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { CustomTheme } from "./theme";

const GlobalStyle = createGlobalStyle<{ theme: CustomTheme }>`
  body {
    font-family: ${(props) => props.theme.font.roboto};
    color: ${(props) => props.theme.colors.gray};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  },
  ol, ul {
    list-style: none;
  }
`;

export { GlobalStyle, StyledThemeProvider as ThemeProvider };