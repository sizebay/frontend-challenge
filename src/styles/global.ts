import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    background-repeat: no-repeat;
    box-sizing: padding-box;
  }

  :focus {
    outline: 0;
  }

  body {
    background: ${(props) => props.theme['gray-800']};
    color: ${(props) => props.theme['gray-600']};
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`