import * as S from './TaskList.styles';
import { useTaskContext } from 'hooks/useTaskContext';
import { NoResults } from './NoResults';
import { TaskItem } from './TaskItem';

export function ModalTaskList() {
  const { currentStatus, searchTask, removeFilter, filteredTasks } = useTaskContext();

  return (
    <S.TaskListContainer>
      <S.TaskList data-testid='task-list'>

        {(searchTask || currentStatus) && filteredTasks.length < 1 ? (
          <NoResults
            removeFilter={removeFilter}
            resultByStatus={currentStatus}
          />
        ) : (
          filteredTasks.map((task, index) => (
            <TaskItem
              key={index}
              task={task}
            />
          )))}

      </S.TaskList>

    </S.TaskListContainer>
  )
}