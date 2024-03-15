import { SectionCard } from "./styles";
import { useTasksContext } from "../../context/TasksContext";
import Card from "./Task";
import NoResultsAlert from "../Alerts/index";

const TasksList = () => {
  const { tasks, activeFilter, clearFilter, value, handleClearValue } =
    useTasksContext();

  const filteredTasks = tasks
    .filter((task) => {
      if (activeFilter === "done") return task.isCompleted;
      if (activeFilter === "pending") return !task.isCompleted;
      return true;
    })
    .filter((task) =>
      task.description.toLowerCase().includes(value.toLowerCase())
    );

  const noResults = filteredTasks.length === 0;

  return (
    <SectionCard>
      {activeFilter && activeFilter !== "unset" && !value && noResults && (
        <NoResultsAlert
          message={`There are no items marked as ${activeFilter}.`}
          onClearFilter={clearFilter}
        />
      )}
      {value && noResults && (
        <NoResultsAlert
          message="Your search found no results."
          onClearFilter={handleClearValue}
        />
      )}
      {!noResults &&
        filteredTasks.map((task) => <Card key={task.id} data={task} />)}
    </SectionCard>
  );
};

export default TasksList;
