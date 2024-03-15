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
  transition: 0.5s width;
  background-color: ${({ theme }) => theme.colors.green};

  &::-webkit-progress-bar {
    background-color: ${({ theme }) => theme.colors.green};
    border-color: ${({ theme }) => theme.colors.green};
  }

  &::-moz-progress-bar {
    background-color: ${({ theme }) => theme.colors.green} 0% 0% no-repeat padding-box;
    border-color: ${({ theme }) => theme.colors.green};
  }

  &::-webkit-progress-value {
    background-color: ${({ theme }) => theme.colors.green};
    border-color: ${({ theme }) => theme.colors.green};
    transition: 0.5s width;
  }

  &::-moz-progress-bar {
    background-color: ${({ theme }) => theme.colors.green} !important;
    border-color: ${({ theme }) => theme.colors.green};
  }
`;

const ProgressDiv = styled.div`
  border-radius: 4px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.progressInactive};
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
