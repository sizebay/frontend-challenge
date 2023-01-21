import styled from 'styled-components';

export const Container = styled.div`
  height: 1.7rem;
  background-color: #E4E4E4;
  border-radius: 0.25rem;
  position: relative;

  .confetti {
    inset: unset !important;
    right: -80px !important;
    top: -110px !important;
  }
`;

interface BarProps {
  progress: number
  ref: any
}

export const Bar = styled.div<BarProps>`
  width: ${({progress}) => progress ? `${progress}%` : '0%'};
  height: inherit;
  background-color: #5DE290;
  border-radius: inherit;
  transition: width 0.5s
`;