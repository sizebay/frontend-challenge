import styled from 'styled-components';
import { theme } from '../../GlobaStyles/theme';

export const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;
  width: 100%;
  height: 100vh;
  max-height: 280px;
  overflow-y: auto;


  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${theme.colors.gray100};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.gray500};
    border-radius: 9px;
  }


  @media(max-width: 800px) {
    max-height: 370px;
  }

`;

export const DefaultText = styled.p`
  text-align: center;
  max-width: 40ch;
  margin-block: 1rem;
`;
