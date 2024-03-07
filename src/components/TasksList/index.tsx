import { useTasksContext } from "../../context/TasksContext";
import Card from "./Task";
import { ClearSearchButton, NoResultsMessage, SecaoCard } from "./styles";

const TasksList = () => {
  const {
    tasks,
    removeTask,
    searchTerm,
    setSearchTerm,
    activeFilter,
    setActiveFilter,
  } = useTasksContext();

  const filteredTasks = tasks
    .filter((task) =>
      activeFilter
        ? activeFilter === "done"
          ? task.isCompleted
          : !task.isCompleted
        : true
    )
    .filter((task) =>
      task.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const noResults = filteredTasks.length === 0 && searchTerm !== "";

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  const handleClearFilter = () => {
    setActiveFilter(null);
  };

  return (
    <SecaoCard>
      {noResults ? (
        activeFilter ? (
          <NoResultsMessage>
            There are no items marked as{" "}
            {activeFilter === "done" ? "done" : "pending"}.{" "}
            <ClearSearchButton onClick={handleClearFilter}>
              Clear the filter here
            </ClearSearchButton>{" "}
            to see all items.
          </NoResultsMessage>
        ) : (
          <NoResultsMessage>
            Your search found no results.{" "}
            <ClearSearchButton onClick={handleClearSearch}>
              Clean the search here
            </ClearSearchButton>{" "}
            to see all items.
          </NoResultsMessage>
        )
      ) : (
        filteredTasks.map((task) => (
          <Card
            key={task.id}
            data={task}
            onRemove={() => removeTask(task.id)}
          />
        ))
      )}
    </SecaoCard>
  );
};

export default TasksList;
