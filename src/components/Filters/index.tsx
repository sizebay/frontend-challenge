import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import { Container, FilterItem, IconCheck } from "./style";

export default function Filters() {
  const { filter, handleFilter } = useContext(TaskContext);
  return (
    <Container>
      <FilterItem
        selected={filter === "done"}
        onClick={() => handleFilter(filter === "done" ? "" : "done")}
      >
        {filter === "done" && <IconCheck />} Done
      </FilterItem>
      <FilterItem
        selected={filter === "pending"}
        onClick={() => handleFilter(filter === "pending" ? "" : "pending")}
      >
        {filter === "pending" && <IconCheck />}
        Pending
      </FilterItem>
    </Container>
  );
}
