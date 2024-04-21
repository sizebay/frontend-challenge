import styled, { css } from 'styled-components';
import { InputStyles } from './InputText.interfaces';

export const InputText = styled.input<InputStyles>`
  width: 100%;
  height: 100%;
  padding: 15px;
  border-radius: 4px 0 0 4px;
  cursor: pointer;
  
  ${({ theme, $taskItem, $taskItemDone }) =>
    $taskItem &&
    css`
      background: ${$taskItemDone ? theme.colors.green : theme.colors.whiteStrength};
    `
  }
    
  & + button{
    border-radius: 0 4px 4px 0;
  }

  &:focus{
    background: ${({ theme }) => theme.colors.whiteBasic};
    cursor: text;
  }
`