import React from "react";
import { InputProps, InputTypes } from "../../types/input";
import { SearchIcon, SearchInput, SearchWrapper, TaskInput } from "./style";

const Input: React.FC<InputProps> = ({ kind, value, onChange, onInputClick, isDisabled }) => {
  if (kind === InputTypes.TASK) {
    return (
      <TaskInput
        type="text"
        placeholder="Add new item..."
        value={value}
        onChange={onChange}
        name="task"
        disabled={isDisabled}
        onClick={onInputClick}
      />
    );
  } else {
    return (
      <SearchWrapper>
        <SearchInput
          placeholder="Search items"
          value={value}
          onChange={onChange}
          name="search"
        />
        <SearchIcon />
      </SearchWrapper>
    );
  }
};

export default Input;
