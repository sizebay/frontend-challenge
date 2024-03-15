import { DefaultTheme, createGlobalStyle } from "styled-components";
import {themeInterface} from "../styles/theme"

const Global = createGlobalStyle<{ theme: themeInterface }>`
  body {
    margin: 0;
    font-family: ${(props) => props.theme.fontFamily};
    position: relative;
    z-index: 0;
    background-color: ${({ theme }) => theme.colors.darker};
    display: flex !important;
 }

html,
body {
  height: 100%;
  margin: 0;
}

html,
#szb-app-root {
  display: flex;
  justify-content: center;
  align-items: center;
}

code {
  font-family: ${({ theme }) => theme.fontFamily};
}

input:focus {
  outline: none;
  border: 0;
  font-size: 15px;
}
input{
  border: none;
}

@media screen and (max-width: 768px) {
  body {
    height: auto !important;
  }
}
`;

export default Global;
