import { StyledLinearProgress, ProgressBarWrapper } from './ProgressBar.styles';

interface ProgressBarProps {
    value: number;
}

export function ProgressBar({ value }: ProgressBarProps) {
    return (
        <ProgressBarWrapper>
            <StyledLinearProgress variant="determinate" value={value} data-cy="progressBar"/>
        </ProgressBarWrapper>
    );
}