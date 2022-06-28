import styled from 'styled-components';
import { theme } from '../../globalStyles/theme';

interface TaskItemContainerType {
  completed: boolean;
}

export const ActionButtons = styled.div`
  visibility: hidden;
  opacity: 0;
  height: 100%;
  transition: visibility 0s, opacity 0.15s ease-in-out;
`;

export const TaskItemContainer = styled.div<TaskItemContainerType>`
  position: relative;
  width: 100%;
  min-height: 48px;
  display: flex;
  align-items: center;    
  background-color: ${theme.colors.gray100};
  border: 1px solid ${theme.colors.gray200};
  border-radius: 4px;
  transition: background-color 0.1s ease-in-out, opacity 0.1s ease-in-out;
    
    &:hover {
        background-color: ${theme.colors.white};

        ${ActionButtons} {
          visibility: visible;
          opacity: 1;
        }

        ::after{
            content: 'Edit Task';
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            bottom: -40px;
            left: 50%;
            transform: translateX(-50%);
            background-color: ${theme.colors.gray500};
            color: ${theme.colors.white};
            clip-path: polygon(50% 0, 60% 15%, 100% 15%, 100% 100%, 0 100%, 0 15%, 40% 15%);
            width: 86px;
            height: 45px;
            z-index: 2;
        }
    }

    ${props => props.completed && `
        opacity: 0.5;
      `}
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