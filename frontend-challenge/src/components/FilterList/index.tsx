import React, { useState } from "react";
import "./index.css";
import { FilterStatus } from "../../types/FilterStatus";
import { MdCheck, MdClose, MdSearch } from "react-icons/md";

import { FilterListActions, FilterListContainer, FilterListInput, FilterListSearch } from "./styles";

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
      <FilterListActions>
        <button
          className={['filterButton', filter === FilterStatus.DONE ? "active" : ""].join(' ')}
          type="button"
          onClick={() => onFilter(FilterStatus.DONE)}
        >
          {filter === FilterStatus.DONE ? <MdCheck /> : ""}
          Done
        </button>
        <button
          className={['filterButton', filter === FilterStatus.PENDING ? "active" : ""].join(' ')}
          type="button"
          onClick={() => onFilter(FilterStatus.PENDING)}
        >
          {filter === FilterStatus.PENDING ? <MdCheck /> : ""}
          Pending
        </button>
      </FilterListActions>
      <FilterListSearch>
        <FilterListInput
          placeholder="Search items"
          value={inputValue}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <button className={["buttonSearch" ,hiddenIcon ? "hidden" : ""].join(' ')} onClick={submit}><MdSearch /></button>
        <button className={["buttonSearch" ,hiddenIcon ? "" : "hidden"].join(' ')} onClick={erase}><MdClose /></button>
      </FilterListSearch>
    </FilterListContainer>
  );
};

export default FilterList;
