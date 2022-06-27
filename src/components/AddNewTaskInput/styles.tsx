import styled from 'styled-components';
import { theme } from '../../globalStyles/theme';

export const InputContainer = styled.form`
  display: flex;
  width: 100%;
  height: 48px;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  flex: 1;
  height: 100%;
  background-color: ${theme.colors.gray100};
  border: 1px solid ${theme.colors.gray200};
  color: ${theme.colors.gray500};
  padding-left: 1rem;
  
  ::placeholder{
    opacity: 0.5;
  }

  :active, :focus{
    background-color: ${theme.colors.white};
  }
`;

export const SubmitButton = styled.button`
    background-color: ${theme.colors.cyan500};
    border: none;
    width: 44px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    &:disabled {
        opacity: 0.5;
    }
`;

