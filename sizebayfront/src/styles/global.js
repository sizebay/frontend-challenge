import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95vw;
    margin: auto;
    font-family: "Roboto", sans-serif;
    background: #fff;
    box-sizing: border-box;
  }
`;
