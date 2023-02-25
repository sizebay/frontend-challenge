import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosCheckmarkCircle, IoMdRemoveCircle } from 'react-icons/io';
import {
  deleteTodo,
  selectFilter,
  selectFilteredTodos,
  selectSearchTerm,
  updateTodo,
} from '../../store/todoSlice';
import { setFilter } from '../../store/filterSlice';
import { changeSearchTerm } from '../../store/searchSlice';
import { RootState, Todo } from '../../@types';

import styles from './styles.module.scss';

function TodoList() {
  const [activeTodoId, setActiveTodoId] = useState<number | null>(null);

  const { todos, filter, searchTerm } = useSelector((state: RootState) => ({
    todos: selectFilteredTodos(state),
    filter: selectFilter(state),
    searchTerm: selectSearchTerm(state),
  }));

  const dispatch = useDispatch();

  const handleItemClick = useCallback(
    (id: number) => {
      setActiveTodoId(activeTodoId === id ? null : id);
    },
    [activeTodoId]
  );

  const handleDelete = useCallback(
    (id: number) => {
      dispatch(deleteTodo(id));
    },
    [dispatch]
  );

  const handleUpdate = useCallback(
    (todo: Todo) => {
      const updatedTodo = {
        ...todo,
        done: true,
      };
      dispatch(updateTodo(updatedTodo));
    },
    [dispatch]
  );

  if (todos.length === 0) {
    const filterState = filter === 'completed' ? 'done' : filter;

    const resetFilters = () => {
      dispatch(setFilter('all'));
      dispatch(changeSearchTerm(''));
    };

    return (
      <EmptyState
        filterState={filterState}
        searchTerm={searchTerm}
        onResetFilters={resetFilters}
      />
    );
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

interface Props {
  filterState?: string;
  searchTerm?: string;
  onResetFilters: () => void;
}

function EmptyState({ filterState, searchTerm, onResetFilters }: Props) {
  if (filterState === 'all' && searchTerm === '') {
    return null;
  }

  if (filterState === 'all') {
    return <NoResults onResetFilters={onResetFilters} />;
  }

  return <NoItems filterState={filterState} onResetFilters={onResetFilters} />;
}

function NoResults({ onResetFilters }: Props) {
  return (
    <p className={styles.todoListContainer}>
      Your search found no results.&nbsp;
      <u onClick={onResetFilters}>Clean the search here</u> to see all items.
    </p>
  );
}

function NoItems({ filterState, onResetFilters }: Props) {
  return (
    <p className={styles.todoListContainer}>
      There are no items marked as {filterState}.&nbsp;
      <u onClick={onResetFilters}>Clear the filter here</u> to see all items.
    </p>
  );
}

export { TodoList };
