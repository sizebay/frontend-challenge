import { useTasks } from "../../providers/Tasks";
import ListItem from "../ListItem";
import { Wrapper } from "./styles";

const ListContainer = () => {
  const { tasks } = useTasks();

  return (
    <Wrapper>
      {!!tasks.length &&
        tasks.map((task) => <ListItem key={task.id} task={task} />)}
    </Wrapper>
  );
};

export default ListContainer;
