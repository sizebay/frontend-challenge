import React from "react";
import { ColumnButtons, ColumnSearchBar, Container } from "./styles";
import { FilterButton } from "../Buttons";
import { SearchInput } from "../Inputs";
import { TaskContext } from "../../contexts/TaskContext";

function FilterBar() {
  const { statusFilterCb } = React.useContext(TaskContext);

  const [selected, setSelected] = React.useState<number | null>(null);

  const status = ["done", "pending"];

  const filterStatus = (index: number) => {
    if (selected === index) {
      setSelected(null);
      statusFilterCb("");
    } else {
      setSelected(index);
      statusFilterCb(status[index]);
    }
  };

  return (
    <Container>
      <ColumnButtons>
        <FilterButton
          title={"Done"}
          selected={selected === 0}
          action={() => filterStatus(0)}
        />
        <FilterButton
          title={"Pending"}
          selected={selected === 1}
          action={() => filterStatus(1)}
        />
      </ColumnButtons>

      <ColumnSearchBar>
        <SearchInput />
      </ColumnSearchBar>
    </Container>
  );
}
export default FilterBar;
