import { FormEvent } from 'react';
import { IoMdSearch, IoIosClose, IoMdCheckmark } from 'react-icons/io';

import styles from './styles.module.scss';

function SearchBar() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form className={styles.searchBarContainer} onSubmit={handleSubmit}>
      <ul className={styles.chipsContainer}>
        <li>
          <button>Done</button>
        </li>
        <li>
          <button className={styles.active}>
            <IoMdCheckmark size={15} />
            Pending
          </button>
        </li>
      </ul>

      <p className={styles.inputContainer}>
        <input type="text" placeholder="Search items" />
        <label>
          <button type="submit" aria-label="Search">
            {/* <IoIosClose size={33} /> */}
            <IoMdSearch size={23} />
          </button>
        </label>
      </p>
    </form>
  );
}

export { SearchBar };
