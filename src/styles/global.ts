import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 300;
  }

  li {
    list-style: none;
  }

  :root {
    --title-1: 6rem;
    --title-2: 3.75rem;
    --title-3: 3rem;
    --title-4: 2.125rem; 
    --title-5: 1.5rem;
    --title-6: 1.25rem;
    --primary-color: #5DE290;
    --secundary-color: #4DA6B3;
    --main-red: #E34F4F;
    --primary-gray: #848484;
    --secundary-gray: #DBDBDB;
  }

`;
