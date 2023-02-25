import { useSelector } from 'react-redux';
import { selectProgress } from '../../store/todoSlice';
import { ConfettiImage } from '../ConfettiImage';
import { SearchBar } from '../SearchBar';
import { TodoForm } from '../TodoForm';
import { TodoList } from '../TodoList';
import * as data from '../../utils/dateTime';

import styles from './styles.module.scss';

function Modal() {
  const progressValue = useSelector(selectProgress) || 0;

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

      <progress
        aria-label={`Task completion progress: ${progressValue}%`}
        defaultValue={0}
        max={100}
        value={progressValue}
      />
      <ConfettiImage show={progressValue === 100} />
      <SearchBar />
      <TodoForm />
      <TodoList />
    </section>
  );
}

export { Modal };
