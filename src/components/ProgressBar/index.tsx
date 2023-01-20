import { useRef } from 'react';
import Confetti from 'react-confetti';
import { Bar, Container } from './style';

interface ProgressBarProps {
  allTasks?: number
  completedTasks?: number
}

function ProgressBar({allTasks = 0,completedTasks = 0}: ProgressBarProps) {
  const progress = Math.floor(completedTasks / allTasks * 100);
  const barRef = useRef<HTMLElement>(null);

  return (
    <Container>
      <Bar progress={progress} data-testid="progress-bar" ref={barRef}/>
      {progress === 100 && (
        <Confetti
          className='confetti'
          width={200}
          height={150}
          numberOfPieces={50}
          recycle={false}
          confettiSource={{ x: 50, y: 50, w: 50, h: 50 }}
        />
      )}
    </Container>
  );
}

export default ProgressBar;