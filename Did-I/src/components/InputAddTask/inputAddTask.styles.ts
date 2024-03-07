import styled, { css } from "styled-components";
import { InputAddStyles } from "./inputAddTask.types";

export const InputBox = styled.div<InputAddStyles>`
  ${({ theme, width, height }) =>
    css`
      display: flex;
      width: ${width ?? "auto"};
      height: ${height ?? "auto"};
      justify-content: space-between;
      align-items: center;
      height: 48px;
      max-width: 100%;
      border: ${`1px solid ${theme.colors.grayBackgroundItem}`};
      background-color: ${theme.colors.grayBackgroundItem};
      border-radius: 4px;
      opacity: 0.5;
      padding-left: 10.5px;
      flex-wrap: -ms-wrap-flow;
      font-family: ${theme.font.Regular};
      font-size: ${theme.fontSizes.Regular14};
      color: ${theme.colors.grayMiddle};
      &:focus-within {
        opacity: 1;
        background-color: ${theme.colors.whiteBasic};
      }
      &:hover {
        opacity: 1;
      }
    `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    all: unset;
    flex-grow: 1;
    width: 100%;
    height: 100%;
    padding-left: 10.5px;
    padding-right: 10.5px;
    font-family: ${theme.font.Regular};
    font-size: ${theme.fontSizes.Regular14};
    color: ${theme.colors.grayMiddle};
  `}
`;
export const Icon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: ${({ theme }) => `${theme.colors.whiteBasic}`};
  width: 24px;
  height: 24px;
`;
