import { useTasksContext } from "../../context/TasksContext";
import Card from "./Task";
import { ClearSearchButton, NoResultsMessage, SecaoCard } from "./styles";

const TasksList = () => {
  const { tasks, activeFilter, clearFilter, value, handleClearValue } =
    useTasksContext();

  const filteredTasks = tasks
    ?.filter((task) =>
      activeFilter && activeFilter !== "unset"
        ? activeFilter === "done"
          ? task.isCompleted
          : !task.isCompleted
        : true
    )
    ?.filter((task) =>
      task?.description?.toLowerCase().includes(value.toLowerCase())
    );

  const noResults = filteredTasks?.length === 0;

  return (
    <SecaoCard>
      {!value && noResults && activeFilter === "done" && (
        <NoResultsMessage>
          {`There are no items marked as done.`}{" "}
          <ClearSearchButton onClick={clearFilter}>
            Clear the filter here
          </ClearSearchButton>{" "}
          to see all items.
        </NoResultsMessage>
      )}
      {!value && noResults && activeFilter === "pending" && (
        <NoResultsMessage>
          {`There are no items marked as pending.`}{" "}
          <ClearSearchButton onClick={clearFilter}>
            Clear the filter here
          </ClearSearchButton>{" "}
          to see all items.
        </NoResultsMessage>
      )}
      {!noResults &&
        filteredTasks?.map((task) => <Card key={task.id} data={task} />)}
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
