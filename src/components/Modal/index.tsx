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
    </section>
  );
}

export { Modal };
