import styled from 'styled-components';
import * as Progress from '@radix-ui/react-progress';

export const ProgressContainer = styled(Progress.Root)`
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: ${(props) => props.theme['gray-200']};
  border-radius: 5px;
  height: 25px;
  transform: translateZ(0);
`

export const ProgressIndicator = styled(Progress.Indicator)`
  background-color: ${(props) => props.theme['green-500']};
  width: 100%;
  height: 100%;
  transition: transform 660ms cubic-bezier(0.65, 0, 0.35, 1);
`