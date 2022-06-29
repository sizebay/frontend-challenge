import styled from 'styled-components';
import { theme } from '../../globalStyles/theme';

export const TaskListContainer = styled.div`
  width: 100%;
  height: calc(100% - 250px);
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;


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

  @media (max-width: 800px) {
    height: calc(100% - 300px);
  }
`;
