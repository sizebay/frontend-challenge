import styled, { css } from "styled-components"
import { ProgressBarStyles } from "./ProgressBar.interfaces"

export const ProgressBar = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  max-width: 680px;
  max-height: 24px;
  background: ${({ theme }) => theme.colors.grayLight};
  border-radius: 4px;
`
export const ProgressBarPercentage = styled.div<ProgressBarStyles>`
  width: ${({ width }) => width}%;
  height: 100%;
  max-width: 680px;
  max-height: 24px;
  background: ${({ theme }) => theme.colors.green};
  border-radius: 4px;
  transition: ease-in-out .3s;
`

export const Animation = styled.div`
  ${({ theme }) =>
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: 1%;
      left: 75%;
      width: 16vw;
      height: 21.7vh;

      @media (max-width: ${theme.breakpoints.tablets}) {
        bottom: 0;
        left: 85%;
        width: 21vw;
        height: 11.7vh;
      }
    `
  }
`