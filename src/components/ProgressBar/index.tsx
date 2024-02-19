import { ProgressBarContainer, ProgressStatus } from './styles'

export interface tasksItemsCountProps {
  completedItemsCount: number;
  tasksCount: number;
}

export function ProgressBar({completedItemsCount, tasksCount}: tasksItemsCountProps) {
  const progressStatus = (completedItemsCount/tasksCount) * 100 || 0;

  return (
    <ProgressBarContainer>
      <ProgressStatus width={progressStatus} completed={completedItemsCount === tasksCount}/>
    </ProgressBarContainer>
  )
}