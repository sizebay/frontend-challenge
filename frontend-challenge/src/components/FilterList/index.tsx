import React from "react";
import "./index.css";
import { FilterStatus } from "../../types/FilterStatus";
import { MdCheck, MdClose, MdSearch } from "react-icons/md";

type FilterProps = {
  filter: FilterStatus;
  inputValue: string;
  onFilter: (filter: FilterStatus) => void;
  onSearch: (newSearch: string) => void;
  onNewInput: (newInput: string) => void;
};

const FilterList = (props: FilterProps) => {
  const { filter, inputValue, onFilter, onSearch, onNewInput } = props;
  const ESCAPE_KEY = 27;
  const ENTER_KEY = 13;

  const erase = () => {
    onSearch("");
  };

  const submit = () => {
    if (onSearch) {
      onSearch(inputValue);
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
    <div>
      <div>
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
      </div>
      <div>
        <input
          placeholder="Search items"
          value={inputValue}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <button onClick={submit}><MdSearch /></button>
        <button onClick={erase}><MdClose /></button>
      </div>
    </div>
  );
};

export default FilterList;
