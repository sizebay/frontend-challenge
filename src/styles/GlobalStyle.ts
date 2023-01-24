import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
    }
    body {
       font-family: ${({ theme }) => theme.fonts.roboto};
        background-color: ${({ theme }) => theme.colors.background.secondary};
        color:${({ theme }) => theme.colors.primary}
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
`;

export default GlobalStyle;
