import styled from 'styled-components';
import { theme } from '../../globalStyles/theme';

export const ProgressBarContainer = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 24px;
  background-color: ${theme.colors.gray100};
  margin-bottom: 24px;
`;

export const Progress = styled.div<{ percentage: number }>`
    width: ${props => props.percentage}%;
    height: 100%;
    background-color: ${theme.colors.green500};
    transition: width 0.3s ease-in-out;
`

export const Reward = styled.div`
    position: absolute;
    top: 0;
    left: 100%;
    transform: translateX(-50%);
`
