import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--medium-dark-grey);
  }

  html, body, #root {
    max-width: 100vw;
    max-height: 100vh;
    width: 100%;
    height: 100%;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: 'Roboto', sans-serif;
  }

  html {
    background: var(--dark-grey);
  }

  :root {
    --white: #FFFFFF;
    --dark-grey: #555555;
    --medium-dark-grey: #848484;
    --box-shadow: #00000029;
    --medium-grey: #E4E4E4;
    --grey: #DBDBDB;
    --light-grey: #F7F7F8;
    --blue: #4DA6B3;
    --green: #5DE290;
    --red: #E34F4F;
  }
`;
