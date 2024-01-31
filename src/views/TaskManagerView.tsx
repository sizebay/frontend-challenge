import AddItem from "@/components/add/AddItem";
import ItemList from "@/components/items/ItemsList";
import FilterSection from "@/components/search/FilterSection";
import ProgressBar from "@/components/progress/ProgressBar";
import { IRootState } from "@/pages/_app";
import React, { useState } from "react";
import { useSelector } from "react-redux";

function TaskManagerView() {
  const choresList = useSelector((state: IRootState) => state.chores.value);

  const [filteredList, setFilteredList] = useState(choresList);

  return (
    <>
      <ProgressBar choresList={choresList} />
      <FilterSection
        filteredList={filteredList}
        setFilteredList={setFilteredList}
        currentList={choresList}
      />
      <AddItem />
      <ItemList choresList={filteredList} />
    </>
  );
}

export default TaskManagerView;
