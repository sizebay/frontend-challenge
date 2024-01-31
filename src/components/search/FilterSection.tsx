import classes from "./filter-section.module.css";
import SearchBar from "./SearchBar";
import { ChoreInterface } from "@/utils/interfaces";
import StatusBar from "./StatusBar";
import { useEffect, useState } from "react";
import { FilterEnum } from "@/utils/enums";

interface FilterProps {
  setFilteredList: React.Dispatch<React.SetStateAction<ChoreInterface[]>>;
  filteredList: ChoreInterface[];
  currentList: ChoreInterface[];
}

function FilterSection(props: Readonly<FilterProps>) {
  const { setFilteredList, currentList } = props;
  const [status, setStatus] = useState<FilterEnum>(FilterEnum.Null);
  const [searchInputText, setSearchInputText] = useState("");

  //Filter the list based on the status and search input
  useEffect(() => {
    let updatedList = [...currentList];
    if (status !== FilterEnum.Null) {
      updatedList = updatedList.filter((event) => {
        if (status === FilterEnum.Done) {
          return event.isDone;
        } else {
          return !event.isDone;
        }
      });
    }
    if (searchInputText !== "") {
      updatedList = updatedList.filter((event) => {
        return event.chore.toLowerCase().includes(searchInputText.toLowerCase());
      });
    }
    setFilteredList(updatedList);
  }, [status, searchInputText, currentList]);

  return (
    <div className={classes.container}>
      <StatusBar status={status} setStatus={setStatus} />
      <div className={classes.searchBar}>
        <SearchBar searchInputText={searchInputText} setSearchInputText={setSearchInputText} />
      </div>
    </div>
  );
}

export default FilterSection;
