import styled from "styled-components";
import { InputStyles } from "./input.types";

export const InputBox = styled.div<InputStyles>`
  border: ${({ theme }) => `1px solid ${theme.colors.grayBackgroundItem}`};
  border-radius: 4px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export const Input = styled.input`
  all: unset;
  width: 100%;
  height: 100%;
  padding-left: 10.5px;
  padding-right: 10.5px;
`;
