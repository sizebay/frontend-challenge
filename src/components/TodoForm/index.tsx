import { FormEvent } from 'react';
import { IoIosAddCircle } from 'react-icons/io';

import styles from './styles.module.scss';

function TodoForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form className={styles.todoFormContainer} onSubmit={handleSubmit}>
      <p>
        <input type="text" placeholder="Add new item..." />
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
