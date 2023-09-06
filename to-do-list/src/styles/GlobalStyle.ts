import { createGlobalStyle } from "styled-components";
import { styled } from 'styled-components';


export const GlobalStyle = createGlobalStyle`

/* PADRÃO DE CORES */
:root {

  /* usada para fundo da aplicação */
  --background:  ${props => props.theme.colors.background};

  /* usada para cor do container na aplicação */
  --container: ${props => props.theme.colors.container};

  /* usada para a cor nas letras*/
  --text: ${props => props.theme.colors.text};

  /* usada para a cor do fundo nos componentes */
  --background-component:  ${props => props.theme.colors.components};

  /* usada para cor de destaque na aplicação */
  --highlight: #4DA6B3;

  /* usada para a cor das bordas nos componentes */
  --border-component: #DBDBDB;

  /* usada para a cor de fundo nos componentes selecionados */
  --background-selected-component: #F7F7F8;

  /* usada para a cor de fundo nos componentes dentro da lista de tarefas */
  --background-list-component: #00000029;

  /* usada para o preenchimento da barra de status e fundo do botão de confirmar edição de tarefa */
  --bar_button-green: #5DE290;

  /* usada para o fundo do botão de deletar tarefa */
  --delete-button: #E34F4F;
}

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    box-sizing: border-box;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
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
  input{
    font-family: roboto;
  }
  input:focus{
    outline: none;
  }
  button{
    font-family: 'Roboto', sans-serif;
  }

  /* PADRÃO CSS */
  html{
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #root{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  body{
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.container};
    font-family: 'Roboto', sans-serif;
  }
  input, p{
    color: var(--text);
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, p, strong{
    color: var(--text);
  }

  @media (min-width: 1200px) {
    body{
      padding: 4% 0%;
      background-color: var(--background);
    }
  }
`;

export const ContainerGlobal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-width: 800px;
  background-color: var(--container);
  border-radius: 4px;
  padding: 2em 1em;


  @media (min-width: 768px) {
    padding: 2em 2.5em;
  }

  @media (min-width: 1200px) {
    padding: 54px 60px;
    height: 650px;
  }
`;