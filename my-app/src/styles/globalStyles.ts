import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6{
  color: ${({ theme }) => theme.colors.grayMiddle};
  letter-spacing: 0;
}

p, span, ul{
  color: ${({ theme }) => theme.colors.grayMiddle};
  letter-spacing: 0;
}

button, input, textarea {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  color: ${({ theme }) => theme.colors.grayMiddle};
}

input[type="text"]{
  font-size: ${({ theme }) => theme.fontSizes.text_sm};
  line-height: 19px;
  font-weight: normal;
  letter-spacing: 0px;
  font-style: normal;
  color: ${({ theme }) => theme.colors.grayMiddle};
  border: none;
  outline: none;
}
`