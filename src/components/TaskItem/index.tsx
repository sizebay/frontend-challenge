import { IconCheck, IconDelete, ItemButton, ItemButtonsContainer, TaskItemContainer, TaskItemTitle } from './styles'

export interface TaskItemProps {
  title: string;
  isActive: boolean;
  isChecked: boolean;
  onClick: () => void;
  onCheckItem: () => void;
  onDeleteItem: () => void;
}

export function TaskItem({title, isActive, isChecked, onClick, onCheckItem, onDeleteItem}: TaskItemProps) {
  return(
    <TaskItemContainer onClick={onClick} isActive={isActive} isChecked={isChecked}>
      <TaskItemTitle>
        {title}
      </TaskItemTitle>

      {isActive && !isChecked && (
              <ItemButtonsContainer>
                <ItemButton onClick={onDeleteItem} isChecked={isChecked}>
                  <IconDelete />
                </ItemButton>
                <ItemButton onClick={onCheckItem} isChecked={true}>
                  <IconCheck />
                </ItemButton>
              </ItemButtonsContainer>
            )}
    </TaskItemContainer>
  )
}