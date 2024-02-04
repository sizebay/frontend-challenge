import styled from "styled-components";

interface IconContainerProps {
  isSelected: boolean;
}

export const IconContainer = styled.span<IconContainerProps>`
  margin-right: ${({ isSelected }) => (isSelected ? "8px" : "0")};
  opacity: ${({ isSelected }) => (isSelected ? "1" : "0")};
  display: ${({ isSelected }) => (isSelected ? "block" : "none")};
  transition: opacity 0.3s;
`;

interface StyledButtonProps {
  isSelected: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  font-family: ${(props) => props.theme.font.roboto};
  font-size: ${(props) => props.theme.fontSizes.xSmall};
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.colors.background.white};
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.tealBlue : theme.colors.gray};
  border: 1px solid
    ${({ isSelected, theme }) =>
      isSelected ? theme.colors.tealBlue : theme.colors.silverGray};
  border-radius: 17px;
  cursor: pointer;
  padding: 8px 16px;
  transition: all 0.3s;

  &:hover,
  &:focus {
    border: 1px solid ${(props) => props.theme.colors.tealBlue};
    color: ${(props) => props.theme.colors.tealBlue};
  }
`;
