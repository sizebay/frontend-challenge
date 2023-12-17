import styled from "styled-components";

export const TooltipContainer = styled.div`
  background-color: var(--grey-dark);
  width: 80px;
  height: 40px;
  color: var(--white);
  position: relative;
  align-items: center;
  display: flex;
  justify-content: center;
  overflow: visible;
  font-weight: 400;
  font-size: 14px;
  border-radius: 4px;
`;

export const TooltipSpan = styled.span`
  background-color: pink;
  background-color: var(--grey-dark);
  width: 10px;
  height: 10px;
  position: absolute;
  top: -4px;
  transform: rotate(45deg);
  right: 43%;
`;
