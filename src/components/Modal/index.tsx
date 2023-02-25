import { SearchBar } from '../SearchBar';
import { TodoForm } from '../TodoForm';
import { TodoList } from '../TodoList';
import * as data from '../../utils/dateTime';

import styles from './styles.module.scss';

function Modal() {
  return (
    <section className={styles.modalContainer}>
      <header>
        <hgroup>
          <h2>{data.day}</h2>
          <p>
            {data.month}
            <time>{data.year}</time>
          </p>
        </hgroup>
        <p>{data.dayOfWeek}</p>
      </header>

      <progress max={100} value={50} />

      <SearchBar />
      <TodoForm />
      <TodoList />
    </section>
  );
}

export { Modal };
