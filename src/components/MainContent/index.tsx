import { useTasks } from "../../providers/Tasks";
import DateHeader from "../DateHeader";
import ProgressBar from "../ProgressBar";
import { Wrapper } from "./styles";

const MainContent = () => {
  const { addTask, percentageCompletedTasks } = useTasks();

  return (
    <Wrapper>
      <DateHeader />
      <ProgressBar progress={percentageCompletedTasks} />
    </Wrapper>
  );
};

export default MainContent;
