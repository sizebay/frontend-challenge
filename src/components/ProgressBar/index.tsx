import { Bar, Container } from './style';

interface ProgressBarProps {
  allTasks: number
  completedTasks: number
}

function ProgressBar({allTasks,completedTasks}: ProgressBarProps) {
  const progress = Math.floor(completedTasks / allTasks * 100);
  
  return (
    <Container>
      <Bar progress={progress} data-testid="progress-bar"/>
    </Container>
  );
}

export default ProgressBar;