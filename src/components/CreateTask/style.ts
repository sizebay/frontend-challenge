import { MdAddCircle } from "react-icons/md";
import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex: 3;
  border: 1px solid ${({ theme }) => theme.colors.border};

  border-radius: 4px;
`;

export const InputSearch = styled.input`
  flex: 1;
  padding: 11px 17px;
  font-family: ${({ theme }) => theme.fonts.roboto};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px 0px 0px 4px;
  outline: none;
  ::placeholder {
    opacity: 0.5;
  }
`;

export const ButtonCreate = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.blue};
  opacity: ${({ theme, disabled }) => (disabled ? 0.5 : 1)};
  padding: 11px 10px;
  border-radius: 0px 4px 4px 0px;
  cursor: pointer;
`;

export const IconAdd = styled(MdAddCircle)`
  color: ${({ theme }) => theme.colors.background.primary};
  font-size: 24px;
`;
