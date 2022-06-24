import styled from 'styled-components';
import { theme } from '../../GlobaStyles/theme';

export const ModalContainer = styled.main`
  width: 100vw;
  max-width: 800px;
  height: 650px;
  background-color: ${theme.colors.white};
  border-radius: 4px;
  padding: 54px 60px;

  
  @media(max-width: 800px) {
    height: 90vh;
    max-width: 90vw;
  }
`;
