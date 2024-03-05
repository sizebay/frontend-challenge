import { css, styled } from "styled-components";
import { ButtonStyles } from "./button.types";

export const Button = styled.button<ButtonStyles>`
  ${({ theme, clicked, $filterButton }) =>
    $filterButton &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 64px;
      padding: 8px 16px 6px 16px;
      border: ${clicked
        ? `1px solid ${theme.colors.greenAddItem}`
        : `1px solid ${theme.colors.grayBackgroundItem}`};
      border-radius: 20px;
      color: ${clicked ? theme.colors.greenAddItem : theme.colors.grayMiddle};
      background-color: ${clicked
        ? theme.colors.grayBackgroundItem
        : theme.colors.whiteBasic};
      font-size: ${({ theme }) => theme.fontSizes.Regular14};
    `}

  ${({ theme, $doneButton }) =>
    $doneButton &&
    css`
      cursor: pointer;
      border: 0 transparent;
      background-color: ${theme.colors.greenTaskBar};
      height: 48px;
      border-radius: 0px 4px 4px 0px;
      display: flex;
      flex-grow: 1;
      justify-content: center;
      align-items: center;
      margin: 0;
    `}
    ${({ $excludeButton }) =>
    $excludeButton &&
    css`
      width: auto;
      cursor: pointer;
      border: 0 transparent;
      background-color: ${({ theme }) => theme.colors.redExcludeButton};
      height: 48px;
      display: flex;
      flex-grow: 1;
      justify-content: center;
      align-items: center;
      margin: 0;
      border: none;
    `}
    ${({ $addButton }) =>
    $addButton &&
    css`
      cursor: pointer;
      border: 0 transparent;
      background-color: ${({ theme }) => theme.colors.greenAddItem};
      width: 44px;
      height: 48px;
      border-radius: 0px 4px 4px 0px;
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`;
