import React from "react";
import { IconSearch } from "../SearchFilterPanel/style";
import { ButtonSearch, Input, SearchContainer } from "./style";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps): React.ReactElement {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    onSearch(newSearchTerm);
  };

  return (
    <SearchContainer>
      <Input
        type="text"
        placeholder="Search items"
        onChange={handleInputChange}
        data-testid="search-input"
      />
      <ButtonSearch data-testid="button-search">
        <IconSearch />
      </ButtonSearch>
    </SearchContainer>
  );
}

export default SearchBar;
