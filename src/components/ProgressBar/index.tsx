import React from 'react';
import { StyledProgressBar, ProgressFill } from './style';

export interface ProgressBarProps {
  completedItems: number;
    totalTasks: number;
  }

function ProgressBar({ completedItems, totalTasks }: ProgressBarProps) {
  const progressBarWidth = (completedItems / totalTasks) * 100 || 0;

  return ( 
    <StyledProgressBar>
        <ProgressFill width={progressBarWidth} completed={completedItems === totalTasks} />
    </StyledProgressBar>
  );
};

export default ProgressBar;