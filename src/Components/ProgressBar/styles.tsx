import styled from 'styled-components';
import { theme } from '../../GlobaStyles/theme';

interface ProgressType {
    percentage: number;
}

export const ProgressBarContainer = styled.div`
  height: 24px;
  width: 100%;
  background-color: ${theme.colors.gray100};
  border-radius: 4px;
  margin-bottom: 24px;
  overflow: hidden;
`;

export const Progress = styled.div<ProgressType>`
  width: ${props => props.percentage}%;
  background-color: ${theme.colors.green500};
  height: 100%;

  transition: width 0.2s ease-in-out;
`;

