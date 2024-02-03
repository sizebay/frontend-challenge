import { IoMdRemoveCircle, IoMdCheckmarkCircle } from "react-icons/io";
import styled, { css } from "styled-components";

export const List = styled.ul`
  padding-left: 0;
  max-height: 232px;
  overflow-y: auto;
  border-radius: 4px;

  scrollbar-width: thin;
  scrollbar-color: ${(props) => props.theme.colors.gray};

  ::-webkit-scrollbar-button {
    height: 0;
    width: 0;
  }
`;

interface StyledItemProps {
  isActive: boolean;
  checked?: boolean;
  selectedButton: string | null;
}

interface DeleteButtonProps {
  checked?: boolean;
}

export const IconRemove = styled(IoMdRemoveCircle)`
  font-size: 20px;
`;

export const DeleteButton = styled.button<DeleteButtonProps>`
  position: absolute;
  top: 50%;
  width: 40px;
  height: 48px;
  right: ${({ checked }) => (checked ? "40px" : "0")};
  transform: translateY(-50%);
  background-color: ${({ checked, theme }) =>
    checked
      ? theme.colors.background.softGreen
      : theme.colors.background.redCoral};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  border-radius: 0 4px 4px 0;

  border-radius: ${({ checked }) => (checked ? "0" : "0 4px 4px 0")};
`;

export const StyledItem = styled.li<StyledItemProps>`
  ${(props) =>
    props.checked
      ? css`
          background: ${props.theme.colors.background.pearlGray};
          color: ${props.theme.colors.silverGray};
        `
      : props.isActive
      ? css`
          background: ${props.theme.colors.background.white};
          cursor: pointer;
        `
      : css`
          background: ${props.theme.colors.background.lightGrayish};
          cursor: pointer;
        `};
  
  height: 28px;
  display: flex;
  align-items: center;
  text-align: left;
  opacity: 1;
  padding: 10px;
  margin-bottom: 8px;
  position: relative;
  outline: none;
  transition: background-color 0.3s;
  border-radius: 4px;
`;

export const IconCheck = styled(IoMdCheckmarkCircle)`
  font-size: 20px;
`;
