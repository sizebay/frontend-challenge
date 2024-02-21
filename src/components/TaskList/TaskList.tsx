import { TaskItemComponent } from './TaskItem/TaskItem';
import { NoFoundMessageContainer, TasksContainer } from './TaskList.styles';
import { useTaskContext, FilterType } from '../../context/TaskContext';

export function TaskList() {
  const { filterTasks, clearFilters } = useTaskContext();
  const { filtersState } = useTaskContext();
  const { activeFilter, filterText } = filtersState;

  const filteredTasks = filterTasks();

  if (filteredTasks.length === 0) {
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
    } else if (filterText.trim() !== "") {
      return (
        <NoFoundMessageContainer data-cy="notFoundMessage">
          Your search found no results.
          <span onClick={clearFilters}>
            Clean the search here
          </span> to see all items.
        </NoFoundMessageContainer>
      );
    }
  }

  return (
    <TasksContainer data-cy="taskList">
      {filteredTasks.map(task => (
        <TaskItemComponent
          key={task.id}
          task={task}
        />
      ))}
    </TasksContainer>
  );
}
