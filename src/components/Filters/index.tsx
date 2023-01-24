import { Done } from "../../@types/task";
import { Container, FilterItem, IconCheck } from "./style";

interface FiltersProps {
  handleFilter: (query: Done) => void;
  filter: Done;
}

export default function Filters({ handleFilter, filter }: FiltersProps) {
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
