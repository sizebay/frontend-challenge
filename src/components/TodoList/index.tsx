import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosCheckmarkCircle, IoMdRemoveCircle } from 'react-icons/io';
import {
  deleteTodo,
  selectFilteredTodos,
  updateTodo,
  selectFilter,
} from '../../store/todoSlice';
import { setFilter } from '../../store/filterSlice';
import { Todo } from '../../@types';

import styles from './styles.module.scss';

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [activeTodoId, setActiveTodoId] = useState<number | null>(null);
  const dispatch = useDispatch();
  const todoList = useSelector(selectFilteredTodos);
  const filter = useSelector(selectFilter);

  const updateTodos = () => {
    setTodos(todoList);
  };

  useEffect(() => {
    updateTodos();
  }, [todoList]);

  if (!todos)
    return <p className={styles.todoListContainer}>Something went wrong...</p>;

  if (todos.length === 0) {
    const filterState = filter === 'completed' ? 'done' : filter;

    const resetFilters = () => {
      dispatch(setFilter('all'));
    };

    return (
      <p className={styles.todoListContainer}>
        {filterState === 'all' ? (
          <>
            Your search found no results.{' '}
            <u onClick={resetFilters}>Clean the search here</u> to see all
            items.
          </>
        ) : (
          <>
            There are no items marked as {filterState}.{' '}
            <u onClick={resetFilters}>Clear the filter here</u> to see all
            items.
          </>
        )}
      </p>
    );
  }

  function handleItemClick(id: number) {
    setActiveTodoId(activeTodoId === id ? null : id);
  }

  function handleDelete(id: number) {
    dispatch(deleteTodo(id));
  }

  function handleUpdate(todo: Todo) {
    const updatedTodo = {
      ...todo,
      done: true,
    };
    dispatch(updateTodo(updatedTodo));
  }

  return (
    <ul className={styles.todoListContainer}>
      {todos?.map(todo => (
        <li
          key={todo.id}
          className={todo.id === activeTodoId ? styles.active : ''}
          onClick={() => handleItemClick(todo.id)}
        >
          {todo.text}
          {todo.id === activeTodoId && (
            <p className={styles.controls}>
              <button
                className={styles.delete}
                onClick={() => handleDelete(todo.id)}
              >
                <IoMdRemoveCircle size={24.63} fill={'#fff'} />
              </button>
              <button
                className={styles.done}
                onClick={() => handleUpdate(todo)}
              >
                <IoIosCheckmarkCircle size={24.63} fill={'#fff'} />
              </button>
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}

export { TodoList };
