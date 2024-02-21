import { useTaskContext } from '../../context/TaskContext';
import { StyledLinearProgress, ProgressBarWrapper } from './ProgressBar.styles';

export function ProgressBar() {
    const { progressPercentage } = useTaskContext();
    
    return (
        <ProgressBarWrapper>
            <StyledLinearProgress variant="determinate" value={progressPercentage} data-cy="progressBar" />
        </ProgressBarWrapper>
    );
}