import { Container, Progress } from "./style";

interface ProgressBarProps {
  tasksTotalDone: number;
  tasksTotal: number;
}

export default function ProgressBar({
  tasksTotalDone,
  tasksTotal,
}: ProgressBarProps) {
  const percentageProgress =
    tasksTotal === 0 ? 0 : (tasksTotalDone / tasksTotal) * 100;

  return (
    <Container>
      <Progress percent={percentageProgress} />
    </Container>
  );
}
