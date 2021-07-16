import React from "react";
import { TaskContext } from "../../contexts/TaskContext";
import {
  SearchInputContainer,
  SearchInputStyled,
  FaSearchStyled,
  FaTimesStyled,
} from "./styles";

export function SearchInput() {
  const { textFilter, textFilterCb } = React.useContext(TaskContext);

  React.useEffect(() => {
    console.log(textFilter);
  }, [textFilter]);

  return (
    <SearchInputContainer>
      <SearchInputStyled
        placeholder="Search items..."
        onChange={(e) => textFilterCb(e.target.value)}
        value={textFilter}
      />

      {textFilter !== "" ? (
        <FaTimesStyled onClick={() => textFilterCb("")} />
      ) : (
        <FaSearchStyled />
      )}
    </SearchInputContainer>
  );
}
