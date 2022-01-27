import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    background: #555555;
    box-sizing: border-box;

    & > div#root {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-shadow: 0px 3px 6px #00000029;
      height: 100vh;
      width: 100vw;
      overflow: hidden;
    }
  }
`;
