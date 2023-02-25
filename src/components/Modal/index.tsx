import { SearchBar } from '../SearchBar';
import { TodoForm } from '../TodoForm';

import styles from './styles.module.scss';

function Modal() {
  return (
    <section className={styles.modalContainer}>
      <header>
        <hgroup>
          <h2>07</h2>
          <p>
            Jul
            <time>2021</time>
          </p>
        </hgroup>
        <p>Wednesday</p>
      </header>

      <progress max={100} value={50} />

      <SearchBar />
      <TodoForm />
    </section>
  );
}

export { Modal };
