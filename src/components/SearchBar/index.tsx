import React from "react";
import { IconSearch } from "../SearchFilterPanel/style";
import { ButtonSearch, Input, SearchContainer } from "./style";

function SearchBar(): React.ReactElement {
  return (
    <SearchContainer>
      <Input
        type="text"
        placeholder="Search items"
        data-testid="search-input"
      />
      <ButtonSearch data-testid="button-search">
        <IconSearch />
      </ButtonSearch>
    </SearchContainer>
  );
}

export default SearchBar;
