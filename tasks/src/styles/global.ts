import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
:focus {
    outline: 0;
}
body{
    background: ${(props) => props.theme["gray-800"]};
    color: ${(props) => props.theme["gray-100"]};
    -webkit-font-smoothing: antialiased;
    font-family: Roboto;
}
body, input, textarea, button{
    font: 400 1rem Roboto, sans-serif;
}
`