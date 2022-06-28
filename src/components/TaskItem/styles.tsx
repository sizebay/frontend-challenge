import styled from 'styled-components';
import { theme } from '../../globalStyles/theme';


export const ActionButtons = styled.div`
  visibility: hidden;
  opacity: 0;
  height: 100%;
  transition: visibility 0s, opacity 0.15s ease-in-out;
`;

export const TaskItemContainer = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;    
  background-color: ${theme.colors.gray100};
  border: 1px solid ${theme.colors.gray200};
  border-radius: 4px;
  overflow: hidden;
  transition: background-color 0.1s ease-in-out;
    
    &:hover {
        background-color: ${theme.colors.white};

        ${ActionButtons} {
          visibility: visible;
          opacity: 1;
        }
    }
`;

export const TaskText = styled.p`
  width: 100%;
  padding-left: 1rem;
  color: ${theme.colors.gray500};
  flex: 1;
`;


export const DeleteButton = styled.button`
  width: 44px;
  height: 100%;
  border: none;
  background-color: ${theme.colors.red500};
`;

export const FinishButton = styled.button`
  width: 44px;
  height: 100%;
  border: none;
  background-color: ${theme.colors.green500};
`;

export const NewTextInput = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 1rem;
  border: none;
  color: ${theme.colors.gray500};
  flex: 1;
`;