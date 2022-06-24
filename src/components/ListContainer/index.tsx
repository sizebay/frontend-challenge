import { useTasks } from "../../providers/Tasks";
import ListItem from "../ListItem";
import { SearchState } from "../MainContent";
import { Wrapper } from "./styles";

interface iListContainerProps {
  searchState: SearchState;
  clearFiltersFunction: () => void;
}

const ListContainer = ({
  searchState,
  clearFiltersFunction,
}: iListContainerProps) => {
  const { tasks } = useTasks();

  const filteredTasks = tasks
    .filter((task) =>
      searchState.searchByText
        ? task.description.toLowerCase().includes(searchState.searchByText)
        : task
    )
    .filter((task) => {
      if (searchState.filter) {
        return searchState.filterBy === "Done" ? task.done : !task.done;
      }
      return task;
    });

  return (
    <Wrapper>
      {!!filteredTasks.length ? (
        filteredTasks.map((task) => <ListItem key={task.id} task={task} />)
      ) : searchState.filter ? (
        <p>
          There are no items marked as {searchState.filterBy?.toLowerCase()}.{" "}
          <span onClick={() => clearFiltersFunction()}>
            Clear the filter here
          </span>{" "}
          to see all items.
        </p>
      ) : (
        searchState.searchByText && (
          <p>
            Your search found no results.{" "}
            <span onClick={() => clearFiltersFunction()}>
              Clean the search here
            </span>{" "}
            to see all items.
          </p>
        )
      )}
    </Wrapper>
  );
};

export default ListContainer;
