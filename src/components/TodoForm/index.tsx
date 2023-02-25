import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/todoSlice';
import { generateId } from '../../utils/idGenerator';
import { IoIosAddCircle } from 'react-icons/io';

import styles from './styles.module.scss';

function TodoForm() {
  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();

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

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();

    const value = e.target.value;

    if (value) {
      setInputValue(value);
    }
  }

  return (
    <form className={styles.todoFormContainer} onSubmit={handleSubmit}>
      <p>
        <input
          onChange={handleChange}
          placeholder="Add new item..."
          type="text"
          value={inputValue}
        />
        <label>
          <button type="submit" aria-label="Submit">
            <IoIosAddCircle size={24.63} fill={'#fff'} />
          </button>
        </label>
      </p>
    </form>
  );
}

export { TodoForm };
