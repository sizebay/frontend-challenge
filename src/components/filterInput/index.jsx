import React, { useRef } from "react";
import styled from "styled-components";

const SearchInput = styled.input.attrs({ type: "search" })`
  width: -webkit-fill-available;
  max-width: 450px;
  height: 40px;
  padding: 0 10px;
  background: #ffffff;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  color: #848484;
`;

const FilterInput = (props) => {
  const inputRef = useRef();
  const { filterTaskInput, setFilterTasks, search, setSearch } = props;

  const validateSearch = (props) => {
    filterTaskInput(props);
    if (props.value === "") {
      setFilterTasks([]);
    }
  };

  return (
    <>
      <SearchInput
        type="text"
        name="Task Filter"
        id="task-filter"
        value={search}
        ref={inputRef}
        placeholder="Search Items"
        onChange={(ev) => {
          validateSearch({"value": ev.target.value, "editing": ''});
          setSearch(ev.target.value)
        }}
      />
    </>
  );
};

export default FilterInput;
