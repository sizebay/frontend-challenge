import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${theme.font.family.roboto};
  }
  html{
    @media(max-width: 1080px){
      font-size: 93.75%;
    }
    @media(max-width: 720px){
      font-size: 87.5%;
    }
  }
  body{
    color: ${theme.colors.gray500};
    background: ${theme.colors.gray800};
    -webkit-font-smoothing: antialiased;
    padding: 1rem;
    padding-bottom: 70px;
    width: 100vw;
    height: 100vh;

    display: grid;
    place-content:center;
    place-items:center;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  div,
  a,
  li,
  form {
    font-family: ${theme.font.family.roboto};
  }
  h1{
    ${theme.font.size[96]};
  }
  h2{
    ${theme.font.size[60]};
  }
  h3{
    ${theme.font.size[48]};
  }
  h4{
    ${theme.font.size[34]};
  }
  h5{
    ${theme.font.size[24]};
  }
  h6{
    ${theme.font.size[20]};
  }
  p{
    ${theme.font.size[16]};
  }
  button{
    cursor: pointer;
  }
  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }
`;