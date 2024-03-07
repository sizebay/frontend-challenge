import { useTasksContext } from "../../context/TasksContext";
import Card from "./Task";
import { ClearSearchButton, NoResultsMessage, SecaoCard } from "./styles";

const TasksList = () => {
  const { tasks, removeTask, searchTerm, setSearchTerm } = useTasksContext();

  const filteredTasks = tasks.filter((task) =>
    task.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const noResults = filteredTasks.length === 0 && searchTerm !== "";

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  return (
    <SecaoCard>
      {noResults ? (
        <NoResultsMessage>
          Your search found no results.{" "}
          <ClearSearchButton onClick={handleClearSearch}>
            Clean the search here
          </ClearSearchButton>{" "}
          to see all items.
        </NoResultsMessage>
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
