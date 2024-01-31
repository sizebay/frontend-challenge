import styled from "styled-components";

interface ProgressBarProps {
  width: number;
  completed: boolean;
}

export const StyledProgressBar = styled.div`
  height: 24px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.background.lightGray};
  border-radius: 4px;
  margin-top: 16px;
  overflow: hidden;
`;

export const ProgressFill = styled.div<ProgressBarProps>`
  height: 100%;
  width: ${(props) => props.width}%;
  background-color: ${(props) => props.theme.colors.background.softGreen};
  border-radius: 4px;
  transition: width 0.5s ease;
`;
