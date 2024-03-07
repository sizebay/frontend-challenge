import { useTasksContext } from "../../context/TasksContext";
import styled from "styled-components";

interface ProgressProps {
  divide: number;
}

const ProgressBar = styled.progress`
  width: ${(props: ProgressProps) => props.divide}% !important;
  border-radius: 4px !important;
  height: 24px;
  position: relative;
  background-color: var(--done-green);

  &::-webkit-progress-bar {
    background-color: #e4e4e4;
  }

  &::-moz-progress-bar {
    background-color: #e4e4e4 0% 0% no-repeat padding-box;
  }

  &::-webkit-progress-value {
    background-color: var(--done-green);
    transition: 0.5s width;
  }

  &::-moz-progress-bar {
    background-color: #e4e4e4 !important;
  }
`;

const ProgressDiv = styled.div`
  border-radius: 4px;
  overflow: hidden;
  background-color: #e4e4e4;
  height: 24px;
  display: flex;
`;

const Progress = () => {
  const { tasks } = useTasksContext();

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;
  const divide = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

  return (
    <ProgressDiv>
      <ProgressBar divide={divide} value={divide} max={100} />
    </ProgressDiv>
  );
};

export default Progress;
