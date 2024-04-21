import styled, { css } from "styled-components";
import { TooltipStyles } from "./Tooltip.interfaces";

export const Tooltip = styled.span<TooltipStyles>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  ${({ $taskItem }) =>
    $taskItem &&
    css`
      top: 80%;

      width: 100%;
      height: 100%;
      max-width: 75px;
      max-height: 50px;

      color: ${({ theme }) => theme.colors.whiteBasic};
      background-color: ${({ theme }) => theme.colors.grayMiddle};
      border-radius: 4px;

      font-size: ${({ theme }) => theme.fontSizes.text_sm};
      line-height: 19px;
      font-weight: normal;
      font-style: normal;
      text-align: left;

      z-index: 3;
      cursor: pointer;

      &::before {
        content: "";
        position: absolute;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        border-width: 5px 5px 8px 5px;
        border-style: solid;
        border-color: transparent transparent ${({ theme }) => theme.colors.grayMiddle} transparent;
      }
    `
  }
`;