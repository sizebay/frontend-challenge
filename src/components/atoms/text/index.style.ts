import styled from "styled-components";
import { TextStyles } from "./index.types";

export const Text = styled.div<TextStyles>`
  color: #848484;
  font-size: ${({ size }) => size ? `${size}em` : '1em'};
  line-height: 1em;
  font-weight: ${({ weight }) => weight ? weight : 'normal'};
`;