import { useEffect, useState } from "react";
import DayInfo from "./components/DayInfo";
import FilterList from "./components/FilterList";
import NewTodo from "./components/NewTodo";
import StatusBar from "./components/StatusBar";
import TodoList from "./components/ToDoList";

import { Container, Modal, Panel } from "./styles";
import { FilterStatus } from "./types/FilterStatus";
import { TodoType } from "./types/TodoType";

function App() {
  const [todosList, setTodos] = useState<TodoType[]>([]);
  const [filter, setFilter] = useState<FilterStatus>(FilterStatus.UNFILTERED);
  const [search, setSearch] = useState<string>("");
  const [inputValue, setInputValue] = useState("");
  const [editTodo, setEditTodo] = useState("");

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos") || "[]"));
  }, []);

  const onNewTodo = (newValue: string) => {
    let newList: TodoType[] = [
      ...todosList,
      {
        id: new Date().getTime(),
        value: newValue,
        done: false,
      },
    ];
    localStorage.setItem("todos", JSON.stringify(newList));
    setEditTodo("");
    setTodos(newList);
  };

  const onToggle = (todo: TodoType) => {
    localStorage.removeItem("todos");
    let newList: TodoType[] = todosList.map((obj) =>
      obj.id === todo.id ? { ...obj, done: !todo.done } : obj
    );
    setTodos(newList);
    localStorage.setItem("todos", JSON.stringify(newList));
  };

  const onRemove = (todo: TodoType) => {
    localStorage.removeItem("todos");
    let newList: TodoType[] = todosList.filter((obj) => obj.id !== todo.id);
    setTodos(newList);
    localStorage.setItem("todos", JSON.stringify(newList));
  };

  const onFilter = (newFilter: FilterStatus) => {
    if (filter === newFilter) {
      setFilter(FilterStatus.UNFILTERED);
    } else {
      setFilter(newFilter);
    }
  };

  const onNewInput = (newInput: string) => {
    setInputValue(newInput);
  };

  const onSearch = (newSearch: string) => {
    if (newSearch === "") {
      setInputValue("");
    }
    setSearch(newSearch);
  };

  const onEditTodo = (todo: TodoType) => {
    onRemove(todo);
    setEditTodo(todo.value);
  }

  return (
    <Container>
      <Modal>
        <Panel>
          <DayInfo />
          <StatusBar todos={todosList} />
          <FilterList
            filter={filter}
            inputValue={inputValue}
            onFilter={onFilter}
            onSearch={onSearch}
            onNewInput={onNewInput}
          />
          <NewTodo filter={filter} search={search} editTodo={editTodo} onNewTodo={onNewTodo} />
          <TodoList
            todos={todosList}
            filter={filter}
            search={search}
            onToggle={onToggle}
            onRemove={onRemove}
            onFilter={onFilter}
            onSearch={onSearch}
            editTodo={onEditTodo}
          />
        </Panel>
      </Modal>
    </Container>
  );
}

export default App;
