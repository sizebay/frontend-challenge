import styled, { css } from "styled-components";
import { InputEditStyles } from "./inputEditTask.types";
import { Tooltip } from "../tooltip/tooltip.styles";

export const InputBox = styled.div<InputEditStyles>`
  ${({ theme, width, height, $hasDone }) =>
    css`
      display: flex;
      flex-wrap: wrap;
      width: ${width ?? "auto"};
      height: ${height ?? "auto"};
      justify-content: space-between;
      align-items: center;
      height: 48px;
      max-width: 100%;
      border: ${$hasDone
        ? `2px solid ${theme.colors.greenTaskBar} `
        : `1px solid ${theme.colors.grayBackgroundItem}`};
      background-color: ${theme.colors.grayBackgroundItem};
      border-radius: 4px;
      padding-left: 10.5px;
      flex-wrap: wrap;
      font-family: ${theme.font.Regular};
      font-size: ${theme.fontSizes.Regular14};
      color: ${theme.colors.grayMiddle};
      transition: border 0.2s ease-out;
      &:focus-within {
        background-color: ${theme.colors.whiteBasic};
      }
      &:hover {
        background-color: ${theme.colors.whiteBasic};
      }
    `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    position: relative;
    all: unset;
    max-width: 100%;
    padding-left: 10.5px;
    padding-right: 10.5px;
    font-family: ${theme.font.Regular};
    font-size: ${theme.fontSizes.Regular14};
    color: ${theme.colors.grayMiddle};
    &:hover + ${Tooltip} {
      visibility: visible;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.8);
      width: 230px;
      padding: 8px 8px;
      border-radius: 4px;
    }
  `}
`;

export const Span = styled.span`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-wrap: wrap;
  width: 0;
  transition: width 0.2s ease-out;
  border: 0 transparent;
  gap: 0px;
  ${InputBox}:hover & {
    width: 88px;
  }
`;

export const Icon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: ${({ theme }) => `${theme.colors.whiteBasic}`};
  width: 0;
  transition: width 0.2s ease-out;
  ${InputBox}:hover & {
    width: 24px;
    height: 24px;
  }
`;
