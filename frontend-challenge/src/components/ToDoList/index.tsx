import React from "react";
import "./index.css";
import { TodoType } from "../../types/TodoType";
import { FilterStatus } from "../../types/FilterStatus";
import {
  ButtonDoneTodo,
  ButtonRemoveTodo,
  ClearButton,
  ClearFilterText,
  TodoItem,
  ToDoListContainer,
} from "./styles";
import { MdCheckCircle, MdRemoveCircle } from "react-icons/md";
import ReactTooltip from "react-tooltip";

type TodoProps = {
  todos: Array<TodoType>;
  filter: FilterStatus;
  search: string;
  onRemove: (todo: TodoType) => void;
  onToggle: (todo: TodoType) => void;
  onFilter: (newFilter: FilterStatus) => void;
  onSearch: (newSearch: string) => void;
  editTodo: (todo: TodoType) => void;
  toggleFocus: (todo: TodoType, inFocus: boolean) => void;
};

const TodoList = (props: TodoProps) => {
  const {
    todos,
    filter,
    search,
    onRemove,
    onToggle,
    onFilter,
    onSearch,
    editTodo,
    toggleFocus,
  } = props;

  const filteredTodos = todos.filter((todo) => {
    if (filter === FilterStatus.DONE) {
      return todo.done === true ? todo : false;
    }
    if (filter === FilterStatus.PENDING) {
      return todo.done === false ? todo : false;
    }
    // if (filter === FilterStatus.UNFILTERED) {
    return todo;
    // }
  });

  const searchedTodos = filteredTodos.filter((todo) => {
    return todo.value.toLowerCase().includes(search.toLowerCase());
  });

  const erase = () => {
    onSearch("");
    onFilter(FilterStatus.UNFILTERED);
  };

  return (
    <>
      <ToDoListContainer className="todo-list">
        {searchedTodos.length === 0 && todos.length > 0 ? (
          <li>
            <ClearFilterText>
              Your search found no results.{" "}
              <ClearButton onClick={erase}>Clean the search here</ClearButton>{" "}
              to see all items.
            </ClearFilterText>
          </li>
        ) : (
          searchedTodos.map((todo: TodoType) => {
            return (
              <li
                key={todo.id}
                className={todo.focused ? "onFocus" : ""}
                onMouseEnter={() => toggleFocus(todo, true)}
                onMouseLeave={() => toggleFocus(todo, false)}
              >
                <ReactTooltip id="editTip" place="bottom" effect="solid">
                  Editar
                </ReactTooltip>
                <TodoItem
                  data-tip
                  data-for="editTip"
                  onClick={() => editTodo(todo)}
                  className={["todo-item", todo.done ? "done" : ""].join(" ")}
                >
                  {todo.value}
                </TodoItem>
                <ButtonRemoveTodo
                  type="button"
                  className={todo.focused ? "hidden-remove-button" : ""}
                  onClick={() => onRemove(todo)}
                >
                  <MdRemoveCircle />
                </ButtonRemoveTodo>
                <ButtonDoneTodo
                  type="button"
                  className={todo.focused ? "hidden-done-button" : ""}
                  onClick={() => onToggle(todo)}
                >
                  <MdCheckCircle />
                </ButtonDoneTodo>
              </li>
            );
          })
        )}
      </ToDoListContainer>
    </>
  );
};

export default TodoList;
