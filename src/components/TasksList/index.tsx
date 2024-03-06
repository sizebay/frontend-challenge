import { useTasksContext } from "../../context/TasksContext";
import Card from "./Task";
import { SecaoCard } from "./styles";

const TasksList = () => {
  const { tasks, removeTask } = useTasksContext();

  return (
    <SecaoCard>
      {tasks.map((task) => {
        return (
          <Card
            key={task.id}
            data={task}
            onRemove={() => removeTask(task.id)} // Use removeTask do contexto
          />
        );
      })}
    </SecaoCard>
  );
};

export default TasksList;
