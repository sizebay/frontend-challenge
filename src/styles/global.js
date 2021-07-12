import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    src: local(''),
        url('/fonts/roboto-v27-latin-300.woff2') format('woff2'),
        url('/fonts/roboto-v27-latin-300.woff') format('woff');
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url('/fonts/roboto-v27-latin-regular.woff2') format('woff2'),
        url('/fonts/roboto-v27-latin-regular.woff') format('woff');
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    src: local(''),
        url('/fonts/roboto-v27-latin-700.woff2') format('woff2'),
        url('/fonts/roboto-v27-latin-700.woff') format('woff');
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`

export default GlobalStyles
