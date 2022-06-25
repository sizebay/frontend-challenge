import styled from 'styled-components';
import { theme } from '../../GlobaStyles/theme';

interface ProgressType {
  percentage: number | null;
}

export const ProgressBarContainer = styled.div`
  position: relative;
  height: 24px;
  width: 100%;
  background-color: ${theme.colors.gray100};
  border-radius: 4px;
  margin-bottom: 24px;
  overflow: hidden;

  span{
    position: absolute;
    right: 50%;
    bottom: 50%;
    transform: translate(-50% -50%);

  }
`;

export const Progress = styled.div<ProgressType>`
  width: ${props => props.percentage ? props.percentage : 0}%;
  background-color: ${theme.colors.green500};
  height: 100%;

  transition: width 0.2s ease-in-out;
`;

