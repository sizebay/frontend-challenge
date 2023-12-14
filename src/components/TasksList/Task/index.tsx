import ITasks from "../../../types/ITasks";
import {
  TaskCard,
  ListContainer,
  TaskDescription,
  DescriptionText,
} from "./styles";

const Task = ({ data }: { data: ITasks }) => {
  return (
    <ListContainer>
      <TaskCard>
        <TaskDescription>
          <DescriptionText>{data.description}</DescriptionText>
        </TaskDescription>
      </TaskCard>
    </ListContainer>
  );
};

export default Task;
