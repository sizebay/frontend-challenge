import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { SearchContainer, SearchInput, IconButton } from "./styles";
import { useState } from "react";

const SearchBar = () => {
  const [active, setActive] = useState(false);

  const changeStatus = () => {
    setActive(!active);
  };

  return (
    <SearchContainer>
      <SearchInput
        onBlur={changeStatus}
        onFocus={changeStatus}
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
