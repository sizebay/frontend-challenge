import React, { useState } from "react";
import "./index.css";
import { FilterStatus } from "../../types/FilterStatus";
import { MdCheck, MdClose, MdSearch } from "react-icons/md";

import { FilterListButtons, FilterListContainer } from "./styles";

type FilterProps = {
  filter: FilterStatus;
  inputValue: string;
  onFilter: (filter: FilterStatus) => void;
  onSearch: (newSearch: string) => void;
  onNewInput: (newInput: string) => void;
};

const FilterList = (props: FilterProps) => {
  const [hiddenIcon, setHiddenIcon] = useState(false);
  const { filter, inputValue, onFilter, onSearch, onNewInput } = props;
  const ESCAPE_KEY = 27;
  const ENTER_KEY = 13;

  const erase = () => {
    onSearch("");
    setHiddenIcon(false);
  };

  const submit = () => {
    if (onSearch) {
      onSearch(inputValue);
      setHiddenIcon(true);
    }
  };

  const onKeyDown = (event: { which: number; }) => {
    if (event.which === ENTER_KEY) {
      submit();
    } else if (event.which === ESCAPE_KEY) {
      erase();
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onNewInput(event.target.value);
  };

  return (
    <FilterListContainer>
      <FilterListButtons>
        <button
          className={filter === FilterStatus.DONE ? "active" : ""}
          type="button"
          onClick={() => onFilter(FilterStatus.DONE)}
        >
          {filter === FilterStatus.DONE ? <MdCheck /> : ""}
          Done
        </button>
        <button
          className={filter === FilterStatus.PENDING ? "active" : ""}
          type="button"
          onClick={() => onFilter(FilterStatus.PENDING)}
        >
          {filter === FilterStatus.PENDING ? <MdCheck /> : ""}
          Pending
        </button>
      </FilterListButtons>
      <div>
        <input
          placeholder="Search items"
          value={inputValue}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <button className={hiddenIcon ? "hidden" : ""} onClick={submit}><MdSearch /></button>
        <button className={hiddenIcon ? "" : "hidden"} onClick={erase}><MdClose /></button>
      </div>
    </FilterListContainer>
  );
};

export default FilterList;
