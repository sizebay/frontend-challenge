import { memo, useCallback, useState } from 'react';
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

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLLIElement>, id: number) => {
      if (event.code === 'Enter') {
        event.preventDefault();
        setActiveTodoId(id);
      }
    },
    [todos]
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
    <ul className={styles.todoListContainer} role="list">
      {todos?.map((todo, index) => (
        <li
          aria-controls="control-buttons"
          aria-selected={todo.id === activeTodoId ? true : false}
          className={todo.id === activeTodoId ? styles.active : ''}
          key={todo.id}
          onClick={() => handleItemClick(todo.id)}
          onKeyDown={event => handleKeyDown(event, todo.id)}
          role="listitem"
          tabIndex={0}
        >
          {todo.text}
          {todo.id === activeTodoId && (
            <p id="control-buttons" className={styles.controls} aria-expanded>
              <button
                className={styles.delete}
                onClick={() => handleDelete(todo.id)}
                role="button"
                type="button"
              >
                <IoMdRemoveCircle size={24.63} fill={'#fff'} />
              </button>
              <button
                aria-label={`Mark todo: ${todo.text} as done`}
                aria-pressed={todo.done}
                className={styles.done}
                onClick={() => handleUpdate(todo)}
                role="button"
                type="button"
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

const EmptyState = memo(
  ({ filterState, searchTerm, onResetFilters }: Props) => {
    if (filterState === 'all' && searchTerm === '') {
      return (
        <span style={{ visibility: 'hidden' }}>
          There is no items in the list. Add a new task.
        </span>
      );
    }

    if (filterState === 'all') {
      return <NoResults onResetFilters={onResetFilters} />;
    }

    return (
      <NoItems filterState={filterState} onResetFilters={onResetFilters} />
    );
  }
);

const NoResults = memo(({ onResetFilters }: Props) => {
  return (
    <p className={styles.todoListContainer}>
      Your search found no results.&nbsp;
      <u onClick={onResetFilters} aria-describedby="reset-filters">
        Clean the search here
      </u>
      &nbsp;to see all items.
      <span style={{ visibility: 'hidden' }} id="reset-filters">
        Resets the search filters and shows all items.
      </span>
    </p>
  );
});

const NoItems = memo(({ filterState, onResetFilters }: Props) => {
  return (
    <p className={styles.todoListContainer}>
      There are no items marked as {filterState}.&nbsp;
      <u onClick={onResetFilters} aria-describedby="reset-filters">
        Clear the filter here
      </u>
      &nbsp;to see all items.
    </p>
  );
});

export { TodoList };
