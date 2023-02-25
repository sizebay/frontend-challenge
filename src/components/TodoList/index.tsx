import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTotalTodos } from '../../store/todoSlice';
import { Todo } from '../../@types';

import styles from './styles.module.scss';

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const totalTodos = useSelector(selectTotalTodos);

  const updateTodos = () => {
    setTodos(totalTodos || []);
  };

  useEffect(() => {
    updateTodos();
  }, [totalTodos]);

  if (!todos) return;

  return (
    <ul className={styles.todoListContainer}>
      {todos?.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

export { TodoList };
