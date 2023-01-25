import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import { WarningText } from "./style";

interface Props {
  clearSelectedTask: () => void;
}

export default function Warning({ clearSelectedTask }: Props) {
  const { filter, query, handleFilter, handleQuery } = useContext(TaskContext);

  const clearFilter = () => {
    clearSelectedTask();
    handleFilter("");
  };

  const clearSearch = () => handleQuery("");

  if (query) {
    return (
      <WarningText>
        Your search found no results.{" "}
        <span onClick={clearSearch}>Clean the search here</span> to see all
        items.
      </WarningText>
    );
  } else {
    switch (filter) {
      case "done":
        return (
          <WarningText>
            There are no items marked as done.{" "}
            <span onClick={clearFilter}>Clear the filter here</span> to see all
            items.{" "}
          </WarningText>
        );
      case "pending":
        return (
          <WarningText>
            There are no items marked pending.{" "}
            <span onClick={clearFilter}>Clear the filter here </span> to see all
            items.{" "}
          </WarningText>
        );
      default:
        return null;
    }
  }
}
