import { useTasks } from "../../providers/Tasks";
import DateHeader from "../DateHeader";
import ProgressBar from "../ProgressBar";
import AddItemInput from "../AddItemInput";
import { Wrapper } from "./styles";
import Searcher from "../Searcher";
import { useState } from "react";
import ListItem from "../ListItem";

export type SearchState = {
  filter: boolean;
  searchByText: string;
  filterBy?: "Done" | "Pending";
};

const MainContent = () => {
  const { tasks, percentageCompletedTasks } = useTasks();
  const [searchState, setSearchState] = useState<SearchState>({
    filter: false,
    searchByText: "",
  });

  const changeSearchState = (newSearchState: SearchState) => {
    setSearchState(newSearchState);
  };
  console.log(searchState);

  return (
    <Wrapper>
      <DateHeader />
      <ProgressBar progress={percentageCompletedTasks} />
      <Searcher changeSearchState={changeSearchState} />
      <AddItemInput />
      {tasks.length ? (
        <ul>
          {tasks.map((task) => (
            <ListItem key={task.id} task={task} />
          ))}
        </ul>
      ) : (
        "vc nao tem task"
      )}
    </Wrapper>
  );
};

export default MainContent;
