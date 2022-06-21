import { useTasks } from "../../providers/Tasks";
import DateHeader from "../DateHeader";
import ProgressBar from "../ProgressBar";
import AddItemInput from "../AddItemInput";
import { Wrapper } from "./styles";
import Searcher from "../Searcher";
import { useState } from "react";

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
    </Wrapper>
  );
};

export default MainContent;
