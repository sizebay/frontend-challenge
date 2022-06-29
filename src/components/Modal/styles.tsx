import styled from 'styled-components';
import { theme } from '../../globalStyles/theme';

export const ModalContainer = styled.main`
  width: 90vw;
  max-width: 800px;
  height: 90vh;
  max-height: 650px;
  background-color: ${theme.colors.white};
  justify-self: center;
  border-radius: 4px;
  padding: 54px 60px;

  @media (max-width: 800px) {
    max-height: 90vh;
    padding: 54px 2rem;
  }
`;
