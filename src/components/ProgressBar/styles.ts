import styled from "styled-components";
import { iProgressBarProps } from ".";

export const Wrapper = styled.div<iProgressBarProps>`
  height: 2.4rem;
  width: 100%;
  background-color: var(--secundary-gray);
  border-radius: 0.25rem;
  > div {
    height: 100%;
    width: ${({ progress }) => progress + "%"};
    max-width: 100%;
    background-color: var(--primary-color);
    border-radius: 0.25rem;
    transition: width 0.4s ease;
  }
`;
