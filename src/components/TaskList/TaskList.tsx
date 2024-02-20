import { TaskItemComponent } from './TaskItem/TaskItem';
import { NoFoundMessageContainer, TasksContainer } from './TaskList.styles';
import { FilterProps, TaskProps, FilterType } from '../Modal/Modal';

interface TaskListProps {
  taskList: TaskProps[];
  onDelete: (taskId: number) => void;
  onToggleDone: (taskId: number) => void;
  onTextEdit: (taskId: number, newText: string) => void;
  filtersInfo: FilterProps;
  clearFilters: () => void;
}

export function TaskList({ taskList, onDelete, onToggleDone, onTextEdit, filtersInfo, clearFilters }: TaskListProps) {
  const { activeFilter, filterText } = filtersInfo;
  if (taskList.length === 0) {
    if (activeFilter !== FilterType.None) {
      const noItemsMessage = activeFilter === FilterType.Done ? " done" : " pending";
      return (
        <NoFoundMessageContainer data-cy="notFoundMessage">
          There are no items marked as {noItemsMessage}.
          <span onClick={clearFilters}>
            Clean the filter here
          </span> to see all items.
        </NoFoundMessageContainer>
      );
    } else if (filterText.trim() != "") {
      return (
        <NoFoundMessageContainer data-cy="notFoundMessage">
          Your search found no results.
          <span onClick={clearFilters}>
            Clean the search here
          </span>
          to see all items.
        </NoFoundMessageContainer>
      );
    }
  }

  return (
    <TasksContainer data-cy="taskList">
      {taskList.map(task => (
        <TaskItemComponent
          onTextEdit={onTextEdit}
          onDelete={onDelete}
          onToggleDone={onToggleDone}
          key={task.id}
          task={task}
        />
      ))}
    </TasksContainer>
  );
}
