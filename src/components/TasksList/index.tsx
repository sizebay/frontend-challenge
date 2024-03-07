import { useTasksContext } from "../../context/TasksContext";
import Card from "./Task";
import { SecaoCard } from "./styles";

const TasksList = () => {
  const { tasks, removeTask, searchTerm } = useTasksContext();

  const filteredTasks = tasks.filter((task) =>
    task.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <SecaoCard>
      {filteredTasks.map((task) => {
        return (
          <Card
            key={task.id}
            data={task}
            onRemove={() => removeTask(task.id)}
          />
        );
      })}
    </SecaoCard>
  );
};

export default TasksList;
