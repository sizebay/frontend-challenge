import ITasks from "../../../types/ITasks";
import {
  TaskCard,
  ListContainer,
  DescriptionText,
} from "./styles";

const Task = ({ data }: { data: ITasks }) => {
  return (
    <ListContainer>
      <TaskCard>
          <DescriptionText>{data.description}</DescriptionText>
      </TaskCard>
    </ListContainer>
  );
};

export default Task;
