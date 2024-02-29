import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family:'Roboto' ;
        src: url('fonts/Roboto/Roboto-Regular.ttf');
    }

    @font-face {
        font-family:'Roboto-Light';
        src: url('fonts/Roboto/Roboto-Light.ttf');
    }

    @font-face {
        font-family:'Roboto-Medium';
        src: url('fonts/Roboto/Roboto-Medium.ttf');
    }

    * {
        font-family: 'Roboto';
        margin: 0;
        padding:0;
    }
   

`;
