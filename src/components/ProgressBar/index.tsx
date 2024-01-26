import React from 'react';
import { StyledProgressBar, ProgressFill } from './style';

export interface ProgressBarProps {
    completedTasks: number;
    totalTasks: number;
  }

function ProgressBar({ completedTasks, totalTasks }: ProgressBarProps) {
  const progressBarWidth = (completedTasks / totalTasks) * 100 || 0;

  return ( 
    <StyledProgressBar>
        <ProgressFill width={progressBarWidth} completed={completedTasks === totalTasks} />
    </StyledProgressBar>
  );
};

export default ProgressBar;