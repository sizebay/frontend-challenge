import React, { useContext } from "react";
import { Input, Search, InputWrapper } from "./styles";
import searchIcon from "../../assets/search.png";
import useForm from "../../hooks/useForm";
import { GlobalContext } from "../../Contexts/GlobalContext";

const SearchInput = () => {
  const { states, setters } = useContext(GlobalContext);

  const handleInputChange = (e) => {
    setters.setSearch(e.target.value)
  }

  return (
    <InputWrapper>
      <Input
        placeholder="Search items"
        type="search"
        value={states.search}
        onChange={handleInputChange}
        name="query"
      />
      <Search src={searchIcon} alt="search icon" />
    </InputWrapper>
  );
};

export default SearchInput;
