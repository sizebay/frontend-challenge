import { useSelector } from 'react-redux';
import { selectProgress } from '../../store/todoSlice';
import { SearchBar } from '../SearchBar';
import { TodoForm } from '../TodoForm';
import { TodoList } from '../TodoList';
import * as data from '../../utils/dateTime';

import styles from './styles.module.scss';

function Modal() {
  const progressValue = useSelector(selectProgress);

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

      <progress max={100} value={progressValue} defaultValue={0} />

      <SearchBar />
      <TodoForm />
      <TodoList />
    </section>
  );
}

export { Modal };
