import styled from "styled-components";
import { ProgressBarProps } from ".";

export const Wrapper = styled.div<ProgressBarProps>`
  height: 1.5rem;
  width: 680px;
  background-color: #e4e4e4;
  border-radius: 0.25rem;
  > div {
    height: 100%;
    width: ${({ progress }) => progress + "%"};
    max-width: 100%;
    background-color: #5de290;
    border-radius: 0.25rem;
    transition: width 0.4s ease;
  }
`;
