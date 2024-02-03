import React, { useState } from "react";
import { CenteredSquare, Main } from "./style";
import DateTimeDisplay from "../../components/DateTimeDisplay";
import ProgressBar from "../../components/ProgressBar";
import NewItemBar from "../../components/NewItemBar";
import ListItems from "../../components/ListItems";
import { useTaskService } from "../../services/taskService";
import SearchFilterPanel from "../../components/SearchFilterPanel";

function Home() {
  const {
    items,
    pendingItems,
    totalTasks,
    completedTasks,
    addItem,
    deleteItem,
    checkItem,
    selectedButton,
    setSelectedButton,
  } = useTaskService({
    items: [],
  });

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  const completedItems = items.filter((item) => item.completed);

  return (
    <CenteredSquare>
      <Main>
        <DateTimeDisplay />
        <ProgressBar completedItems={completedTasks} totalTasks={totalTasks} />
        <SearchFilterPanel
          addItem={(content) => addItem(content)}
          selectedButton={selectedButton}
          setSelectedButton={setSelectedButton}
          onSearch={handleSearch}
        />
        <NewItemBar onAddItemClick={(content) => addItem(content)} />
        <ListItems
          items={items}
          completedItems={completedItems}
          pendingItems={pendingItems}
          onDeleteItem={(id) => deleteItem(id)}
          onCheckClick={(id) => checkItem(id)}
          selectedButton={selectedButton}
          searchTerm={searchTerm}
        />
      </Main>
    </CenteredSquare>
  );
}

export default Home;