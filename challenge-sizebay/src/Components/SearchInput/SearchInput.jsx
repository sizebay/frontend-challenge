import React from "react";
import { Input, Search, InputWrapper } from "./styles";
import searchIcon from '../../assets/search.png'

const SearchInput = () => {
  return (
    <InputWrapper>
      <Input placeholder="Search items" type="search" />
      <Search src={searchIcon} alt="search icon" />
    </InputWrapper>
  );
};

export default SearchInput;
