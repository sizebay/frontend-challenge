import { useState } from "react";
import {
  SearchContainer,
  SearchInput,
  IconButton,
  CloseIcon,
  SearchIcon,
} from "./styles";
import { useTasksContext } from "../../context/TasksContext";

const SearchBar = () => {
  const [active, setActive] = useState(false);
  const { value, setValue } = useTasksContext();

  const changeStatus = () => setActive(!active);

  const handleLocalValue = (e: any) => setValue(e.target.value);

  const handleClearValue = () => setValue("")

  return (
    <SearchContainer>
      <SearchInput
        onBlur={changeStatus}
        onFocus={changeStatus}
        onChange={handleLocalValue}
        value={value}
        placeholder="Search items"
      />
      {value !== "" ? (
        <IconButton onClick={handleClearValue}>
          <CloseIcon size={25} />
        </IconButton>
      ) : (
        <IconButton>
          <SearchIcon size={25}/>
        </IconButton>
      )}
    </SearchContainer>
  );
};

export default SearchBar;
