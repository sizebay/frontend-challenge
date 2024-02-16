import React from "react";
import { InputProps, InputTypes } from "../../types/input";
import {
  SearchClearIcon,
  SearchIcon,
  SearchInput,
  SearchWrapper,
  TaskInput,
  TaskInputItem,
} from "./style";

const Input: React.FC<InputProps> = ({
  kind,
  value,
  onChange,
  onInputClick,
  isDisabled,
  onClearClick,
  handleKeyPress,
}) => {
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
        onKeyDown={handleKeyPress}
      />
    );
  } else if (kind === InputTypes.SEARCH) {
    return (
      <SearchWrapper>
        <SearchInput
          placeholder="Search items"
          value={value}
          onChange={onChange}
          name="search"
        />
        {!isDisabled ? (
          <SearchIcon />
        ) : (
          <SearchClearIcon onClick={onClearClick} />
        )}
      </SearchWrapper>
    );
  } else {
    return (
      <TaskInputItem
        defaultValue={value}
        onChange={onChange}
        onClick={onInputClick}
      />
    );
  }
};

export default Input;
