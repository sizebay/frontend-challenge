import { useTasks } from "../../providers/Tasks";
import DateHeader from "../DateHeader";
import ProgressBar from "../ProgressBar";
import AddItemInput from "../AddItemInput";
import { Wrapper } from "./styles";
import Searcher from "../Searcher";
import { useState } from "react";
import ListContainer from "../ListContainer";

export type SearchState = {
  filter: boolean;
  searchByText: string;
  clearFilters: boolean;
  filterBy?: "Done" | "Pending";
};

const MainContent = () => {
  const { percentageCompletedTasks } = useTasks();
  const [searchState, setSearchState] = useState<SearchState>({
    filter: false,
    searchByText: "",
    clearFilters: false,
  });

  const changeSearchState = (newSearchState: SearchState) => {
    setSearchState(newSearchState);
  };

  const toggleClearFilterState = () => {
    setSearchState({ ...searchState, clearFilters: true });
    setTimeout(() => {
      setSearchState({ ...searchState, clearFilters: false });
    }, 100);
  };

  return (
    <Wrapper>
      <DateHeader />
      <ProgressBar progress={percentageCompletedTasks} />
      <Searcher
        changeSearchState={changeSearchState}
        clearFilters={searchState.clearFilters}
      />
      <AddItemInput />
      <ListContainer
        searchState={searchState}
        clearFiltersFunction={toggleClearFilterState}
      />
    </Wrapper>
  );
};

export default MainContent;
