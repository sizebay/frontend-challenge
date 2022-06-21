import { useTasks } from "../../providers/Tasks";
import DateHeader from "../DateHeader";
import ProgressBar from "../ProgressBar";
import AddItemInput from "../AddItemInput";
import { Wrapper } from "./styles";

const MainContent = () => {
  const { tasks, percentageCompletedTasks } = useTasks();

  console.log(tasks);

  return (
    <Wrapper>
      <DateHeader />
      <ProgressBar progress={percentageCompletedTasks} />
      <AddItemInput />
    </Wrapper>
  );
};

export default MainContent;
