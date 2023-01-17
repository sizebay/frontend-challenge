import styled from 'styled-components';

export const Container = styled.div`
  height: 1.7rem;
  background-color: #E4E4E4;
  border-radius: 0.25rem;
`;

interface BarProps {
  progress: number
}

export const Bar = styled.div<BarProps>`
  width: ${({progress}) => progress ? `${progress}%` : '0%'};
  height: inherit;
  background-color: #5DE290;
  border-radius: inherit;
`;