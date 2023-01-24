import { MdClose, MdSearch } from "react-icons/md";
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
`;

export const ButtonSearch = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background.primary};
  padding: 11px 10px;
  border-radius: 0px 4px 4px 0px;
  cursor: pointer;
`;

export const IconSearch = styled(MdSearch)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 24px;
`;

export const IconClose = styled(MdClose)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 24px;
`;
