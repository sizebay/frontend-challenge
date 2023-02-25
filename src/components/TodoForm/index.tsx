import { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosAddCircle } from 'react-icons/io';
import { addTodo, selectTodosSize } from '../../store/todoSlice';
import { generateId } from '../../utils/idGenerator';

import styles from './styles.module.scss';

function TodoForm() {
  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();
  const todosSize = useSelector(selectTodosSize);
  const isActiveClass = inputValue || todosSize;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (inputValue)
      dispatch(
        addTodo({
          id: Number(generateId.next().value),
          text: inputValue,
          done: false,
        })
      );

    setInputValue('');
  }

  return (
    <form className={styles.todoFormContainer} onSubmit={handleSubmit}>
      <p className={isActiveClass ? styles.active : ''}>
        <input
          onChange={e => setInputValue(e.target.value)}
          placeholder="Add new item..."
          type="text"
          value={inputValue}
        />
        <label>
          <button
            aria-label="Submit"
            className={isActiveClass ? styles.active : ''}
            disabled={!inputValue}
            type="submit"
          >
            <IoIosAddCircle size={24.63} fill={'#fff'} />
          </button>
        </label>
      </p>
    </form>
  );
}

export { TodoForm };
