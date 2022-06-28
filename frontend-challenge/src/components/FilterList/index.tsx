import React, { useState } from "react";
import "./index.css";
import { FilterStatus } from "../../types/FilterStatus";

type FilterProps = {
  filter: FilterStatus;
  onFilter: (filter: FilterStatus) => void;
  onSearch: (newSearch: string) => void;
};

const FilterList = (props: FilterProps) => {
  const { filter, onFilter, onSearch } = props;
  const [value, setValue] = useState("");
  const ESCAPE_KEY = 27;
  const ENTER_KEY = 13;

  const erase = () => {
    setValue("");
    onSearch("");
  };

  const submit = () => {
    if (onSearch) {
      onSearch(value);
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
    setValue(event.target.value);
  };

  return (
    <div>
      <div>
        <button
          className={filter === FilterStatus.DONE ? "active" : ""}
          type="button"
          onClick={() => onFilter(FilterStatus.DONE)}
        >
          Done
        </button>
        <button
          className={filter === FilterStatus.PENDING ? "active" : ""}
          type="button"
          onClick={() => onFilter(FilterStatus.PENDING)}
        >
          Pending
        </button>
      </div>
      <div>
        <input
          placeholder="Search items"
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <button onClick={submit}>Search</button>
        <button onClick={erase}>ESC</button>
      </div>
    </div>
  );
};

export default FilterList;
