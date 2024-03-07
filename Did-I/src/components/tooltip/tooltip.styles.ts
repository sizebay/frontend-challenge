import styled, { css } from "styled-components";

export const TooltipBox = styled.div`
  display: inline-block;
  position: relative;
`;

export const Text = styled.p``;

export const Tooltip = styled.span`
  ${({ theme }) => css`
    position: absolute;
    border-radius: 4px;
    left: 50%;
    transform: translateX(-50%);
    padding: 6px;
    color: ${theme.colors.whiteBasic};
    background: ${theme.colors.grayMiddle};
    font-size: ${theme.fontSizes.Regular14};
    line-height: 1;
    z-index: 100;
    white-space: nowrap;
    bottom: calc(var(30px) * -1);
    &::before {
      content: " ";
      left: 50%;
      border: solid transparent;
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
      border-width: ${theme.colors.grayMiddle};
      margin-left: calc(6px * -1);
      bottom: 100%;
      border-bottom-color: ${theme.colors.grayMiddle};
    }
  `}
`;
