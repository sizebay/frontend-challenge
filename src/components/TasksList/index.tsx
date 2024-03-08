import { useTasksContext } from "../../context/TasksContext";
import Card from "./Task";
import { ClearSearchButton, NoResultsMessage, SecaoCard } from "./styles";

const TasksList = () => {
  const {
    tasks,
    removeTask,
    activeFilter,
    clearFilter,
    value,
    handleClearValue,
  } = useTasksContext();

  const filteredTasks = tasks
    ?.filter((task) =>
      activeFilter
        ? activeFilter === "done"
          ? task.isCompleted
          : !task.isCompleted
        : true
    )
    ?.filter((task) =>
      task?.description?.toLowerCase().includes(value.toLowerCase())
    );

  const noResults =
    filteredTasks?.filter((task) =>
      activeFilter
        ? activeFilter === "done"
          ? task.isCompleted
          : !task.isCompleted
        : true
    ).length === 0;

  return (
    <SecaoCard>
      {!value && noResults && activeFilter && (
        <NoResultsMessage>
          {`There are no items marked as ${
            activeFilter === "done" ? "done" : "pending"
          }.`}{" "}
          <ClearSearchButton onClick={clearFilter}>
            Clear the filter here
          </ClearSearchButton>{" "}
          to see all items.
        </NoResultsMessage>
      )}
      {!noResults &&
        filteredTasks?.map((task) => (
          <Card key={task.id} data={task}/>
        ))}
      {value && noResults && (
        <NoResultsMessage>
          Your search found no results.{" "}
          <ClearSearchButton onClick={handleClearValue}>
            Clean the search here
          </ClearSearchButton>{" "}
          to see all items.
        </NoResultsMessage>
      )}
    </SecaoCard>
  );
};

export default TasksList;
