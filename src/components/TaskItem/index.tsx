import { Tooltip } from '@mui/material'
import { ItemButtonsContainer, TaskItemContainer, TaskItemTitle } from './styles'

import { DefaultButton } from '../DefaultButton'

export interface TaskItemProps {
  title: string;
  isContainerActive: boolean;
  isChecked: boolean;
  onClick: () => void;
  onCheckItem: () => void;
  onDeleteItem: () => void;
}

export function TaskItem({title, isContainerActive, isChecked, onClick, onCheckItem, onDeleteItem}: TaskItemProps) {
  return(
    <Tooltip title="Edit task" arrow>
      <TaskItemContainer onClick={onClick} isContainerActive={isContainerActive} isChecked={isChecked}>
        <TaskItemTitle>
          {title}
        </TaskItemTitle>

        {isContainerActive && !isChecked && (
          <ItemButtonsContainer>
            <DefaultButton onClick={onDeleteItem} isButtonActive={isContainerActive} isChecked={false} isSubmit={false} />
            <DefaultButton onClick={onCheckItem} isButtonActive={isContainerActive} isChecked={true} isSubmit={false} />
          </ItemButtonsContainer>
        )}
      </TaskItemContainer>
    </Tooltip>
  )
}