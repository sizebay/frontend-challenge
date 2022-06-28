import { useState } from "react";
import DayInfo from "./components/DayInfo";
import FilterList from "./components/FilterList";
import NewTodo from "./components/NewTodo";
import StatusBar from "./components/StatusBar";
import TodoList from "./components/ToDoList";

import { Container, Modal } from "./styles";
import { FilterStatus } from "./types/FilterStatus";
import { TodoType } from "./types/TodoType";

function App() {
  const [todosList, setTodos] = useState<TodoType[]>([]);
  const [filter, setFilter] = useState<FilterStatus>(FilterStatus.UNFILTERED);
  const [search, setSearch] = useState<string>("");

  const onNewTodo = (newValue: string) => {
    var newList: TodoType[] = [
      ...todosList,
      {
        id: new Date().getTime(),
        value: newValue,
        done: false,
      },
    ];
    setTodos(newList);
  };

  const onToggle = (todo: TodoType) => {
    setTodos(todosList.map((obj) => (obj.id === todo.id ? { ...obj, done: !todo.done } : obj)));
  };

  const onRemove = (todo: TodoType) => {
    setTodos(todosList.filter((obj) => obj.id !== todo.id));
  };

  const onFilter = (newFilter: FilterStatus) => {
    if (filter === newFilter) {
      setFilter(FilterStatus.UNFILTERED);
    } else {
      setFilter(newFilter);
    }
  }

  const onSearch = (newSearch: string) => {
    setSearch(newSearch);
    console.log(newSearch);
  }

  return (
    <Container>
      <Modal>
        <DayInfo />
        <StatusBar />
        <FilterList filter={filter} onFilter={onFilter} onSearch={onSearch} />
        <NewTodo onNewTodo={onNewTodo} />
        <TodoList todos={todosList} filter={filter} onToggle={onToggle} onRemove={onRemove} />
      </Modal>
    </Container>
  );
}

export default App;
