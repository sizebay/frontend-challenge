import styles from './styles.module.scss';

function TodoList() {
  return (
    <ul className={styles.todoListContainer}>
      <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
      <li>Lorem ipsum dolor sit amet.</li>
      <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit amet.</li>
      <li>Lorem ipsum dolor sit amet.</li>
      <li>Lorem ipsum dolor sit amet consectetur.</li>
      <li>Lorem ipsum dolor sit amet.</li>
      <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse?</li>
    </ul>
  );
}

export { TodoList };
