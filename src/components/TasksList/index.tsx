import ITasks from "../../types/ITasks";
import Card from "./Task";
import { SecaoCard } from "./styles";

const TasksList = ({ tasks }: { tasks: ITasks[] | null }) => {
  return (
    <SecaoCard>
      {tasks?.map((task) => {
        return <Card key={task.id} data={task} />;
      })}
    </SecaoCard>
  );
};

export default TasksList;
