import { useTaskContext } from "../../context/TasksContext";
import Card from "./Task";
import { SecaoCard } from "./styles";

interface Props {}

const TasksList = ({}: Props) => {
  const task = useTaskContext();
  return (
    <SecaoCard>
      {task?.map((tasked) => {
        return (
          <Card
            key={task.id}
            data={tasked}
            onRemove={() => onRemoveTask(task.id)}
          />
        );
      })}
    </SecaoCard>
  );
};

export default TasksList;
