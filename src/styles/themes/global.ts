import { createGlobalStyle } from "styled-components";
import defaultTheme from "./default";

export const GlobalStyle = createGlobalStyle`
    :focus{
        outline: 0;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${props => props.theme.gray["700"]};
        color: ${props => props.theme.gray["700"]};
        -webkit-font-smoothing: antialiased;
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        scrollbar-gutter: stable;
    }

    body, input, button {
        font-family: 'Roboto', sans-serif;
        font-size: 0.875rem;
        color: ${defaultTheme.gray[600]};
    }

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${defaultTheme.gray[600]};
        border-radius: 9px;
    }

    ::-webkit-scrollbar-track {
        background-color: ${defaultTheme.gray[300]};
        border-radius: 9px;
    }

    scrollbar-width: thin; 
    scrollbar-color: ${defaultTheme.gray[600]} transparent; 
`