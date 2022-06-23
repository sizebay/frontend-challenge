import styled from 'styled-components';
import { theme } from '../../GlobaStyles/theme';

export const ModalContainer = styled.main`
  width: 800px;
  height: 650px;
  background-color: ${theme.colors.white};
  border-radius: 4px;
  padding: 54px 60px;
  overflow-x: hidden;
  overflow-y: auto;
`;
