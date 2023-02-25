import { FormEvent } from 'react';
import { IoMdSearch, IoIosClose, IoMdCheckmark } from 'react-icons/io';
import { Chips } from '../Chips';

import styles from './styles.module.scss';

function SearchBar() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form className={styles.searchBarContainer} onSubmit={handleSubmit}>
      <Chips />

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
