import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { SearchContainer, SearchInput, IconButton } from "./styles";
import { useState } from "react";
import { useTasksContext } from "../../context/TasksContext";

const SearchBar = () => {
  const [active, setActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { setSearchTerm } = useTasksContext();

  const changeStatus = () => {
    setActive(!active);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
    setSearchTerm(value);
  };

  return (
    <SearchContainer>
      <SearchInput
        onBlur={changeStatus}
        onFocus={changeStatus}
        onChange={handleChange}
        value={searchValue}
        placeholder="Search items"
      />
      <IconButton>
        {active ? (
          <AiOutlineClose size={25} color="var(--grey-dark)" />
        ) : (
          <AiOutlineSearch size={25} color="var(--grey-dark)" />
        )}
      </IconButton>
    </SearchContainer>
  );
};

export default SearchBar;
