import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosCheckmarkCircle, IoMdRemoveCircle } from 'react-icons/io';
import {
  deleteTodo,
  selectTotalTodos,
  updateTodo,
} from '../../store/todoSlice';
import { Todo } from '../../@types';

import styles from './styles.module.scss';

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [activeTodoId, setActiveTodoId] = useState<number | null>(null);
  const dispatch = useDispatch();
  const totalTodos = useSelector(selectTotalTodos);

  const updateTodos = () => {
    setTodos(totalTodos || []);
  };

  useEffect(() => {
    updateTodos();
  }, [totalTodos]);

  if (!todos) return;

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
