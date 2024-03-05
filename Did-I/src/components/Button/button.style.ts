import { styled } from "styled-components";
import { ButtonStyles } from "./button.types";

export const Button = styled.button<ButtonStyles>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 64px;
  padding: 8px 16px 6px 16px;
  border: ${({ theme, clicked }) =>
    clicked
      ? `1px solid ${theme.colors.greenAddItem}`
      : `1px solid ${theme.colors.grayBackgroundItem}`};
  border-radius: 20px;
  color: ${({ theme, clicked }) =>
    clicked ? theme.colors.greenAddItem : theme.colors.grayMiddle};
  background-color: ${({ theme, clicked }) =>
    clicked ? theme.colors.grayBackgroundItem : theme.colors.whiteBasic};
  font-size: ${({ theme }) => theme.fontSizes.Regular14};
`;
