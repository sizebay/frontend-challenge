import styled, { css } from "styled-components";
import { ProgressiveBarStyle } from "./progressiveBar.types";

export const ExternalProgressiveBar = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 24px;
  background-color: ${({ theme }) => theme.colors.grayLight};
`;

export const InternalProgressiveBar = styled.div<ProgressiveBarStyle>`
  width: ${({ width }) => (width > 100 ? `100%` : `${width}%`)};
  height: 100%;
  background-color: ${({ theme }) => theme.colors.greenTaskBar};
  transition: width 1s linear;
`;
export const Animation = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 1%;
    left: 70%;
    width: 16vw;
    height: 21.7vh;
    @media (max-width: ${theme.breakPoints.Tablets}px) {
      width: 40vw;
      height: 40vw;
    }
  `}
`;
