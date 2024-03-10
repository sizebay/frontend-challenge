import { useState } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { SearchContainer, SearchInput, IconButton } from "./styles";
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
          <AiOutlineClose size={25} color="var(--grey-dark)" />
        </IconButton>
      ) : (
        <IconButton>
          <AiOutlineSearch size={25} color="var(--grey-dark)" />
        </IconButton>
      )}
    </SearchContainer>
  );
};

export default SearchBar;
