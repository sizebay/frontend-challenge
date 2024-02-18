import { TaskItemComponent } from "./TaskItem/TaskItem";
import { NoFoundMessageContainer, TasksContainer } from "./TaskList.styles";
import { FilterProps, TaskProps } from '../Modal/Modal';

interface TaskListProps {
  taskList: TaskProps[];
  onDelete: (taskId: number) => void;
  onToggleDone: (taskId: number) => void;
  onTextEdit: (taskId: number, newText: string) => void;
  filtersInfo: FilterProps;
  clearFilters: () => void;

}

export function TaskList({ taskList, onDelete, onToggleDone, onTextEdit, filtersInfo, clearFilters }: TaskListProps) {

  if (taskList.length === 0) {
    const noItemsMessage = filtersInfo.done ? " done" : filtersInfo.pending ? " pending" : null;

    if (noItemsMessage) {
      return (
          <NoFoundMessageContainer>There are no items marked as {noItemsMessage}. <span onClick={clearFilters}>Clean the filter here </span> to see all items.</NoFoundMessageContainer>
      );
    } else if (filtersInfo.filterText.trim() !== "") {
      return (
          <NoFoundMessageContainer>Your search found no results. <span onClick={clearFilters}>Clean the search here </span> to see all items.</NoFoundMessageContainer>
      );
    }
  }

  return (
    <TasksContainer>
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
