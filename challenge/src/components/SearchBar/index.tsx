import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { SearchContainer, SearchInput, IconButton } from "./styles";
import { useState } from "react";

const SearchBar = () => {
  const [selected, setSelected] = useState(false);

  const changeStatus = () => {
    setSelected(!selected);
  };

  return (
    <SearchContainer>
      <SearchInput onFocus={changeStatus} placeholder="Search items" />
      <IconButton>
        {selected ? (
          <AiOutlineClose size={25} color="var(--grey-dark)" />
        ) : (
          <AiOutlineSearch size={25} color="var(--grey-dark)" />
        )}
      </IconButton>
    </SearchContainer>
  );
};

export default SearchBar;
