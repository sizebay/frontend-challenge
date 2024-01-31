import { useState } from "react";
import classes from "./searchBar.module.css";
import { BiSearch } from "react-icons/bi";
import { FiX } from "react-icons/fi";

interface SearchBarProps {
  setSearchInputText: React.Dispatch<React.SetStateAction<string>>;
  searchInputText: string;
}

function SearchBar(props: Readonly<SearchBarProps>) {
  const { setSearchInputText, searchInputText } = props;

  //Clear search bar input when the "X" icon is clicked
  function resetInputHandler() {
    setSearchInputText("");
  }

  function handleInputType(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchInputText(event.target.value);
  }

  const [isFocused, setIsFocused] = useState(false);

  //Two functions to change the search bar state onFocus and onBlur
  const onFocus = () => setIsFocused(true);
  const onBlur = () => setIsFocused(false);

  return (
    <div className={classes.container}>
      {isFocused && <FiX onMouseDown={resetInputHandler} className={classes.icon} />}
      {!isFocused && <BiSearch className={classes.icon} />}
      <input
        className={classes.input}
        placeholder="Search items"
        onFocus={onFocus}
        onBlur={onBlur}
        value={searchInputText}
        onChange={(e) => {
          handleInputType(e);
        }}
      />
    </div>
  );
}

export default SearchBar;
