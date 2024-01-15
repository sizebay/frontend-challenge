import ITasks from "../../types/ITasks";
import Card from "./Task";
import { SecaoCard } from "./styles";

interface Props {
  tasks: ITasks[] | null;
  onRemoveTask: (taskId: string) => void;
}

const TasksList = ({ tasks, onRemoveTask }: Props) => {
  return (
    <SecaoCard>
      {tasks?.map((task) => {
        return (
          <Card
            key={task.id}
            data={task}
            onRemove={() => onRemoveTask(task.id)}
          />
        );
      })}
    </SecaoCard>
  );
};

export default TasksList;
