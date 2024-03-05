import styled, { css } from "styled-components";
import { InputFilterStyles } from "./inputFilter.types";

export const InputBox = styled.div<InputFilterStyles>`
  ${({ theme, width, height }) =>
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: ${`1px solid ${theme.colors.grayBackgroundItem}`};
      border-radius: 4px;
      width: ${width ?? "auto"};
      height: ${height ?? "auto"};
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

export const Span = styled.span<InputFilterStyles>`
  display: flex;
  justify-content: center;
  align-items: center;
`;
