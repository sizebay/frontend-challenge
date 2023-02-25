import { FormEvent } from 'react';
import { IoMdSearch, IoIosClose } from 'react-icons/io';

import styles from './styles.module.scss';

function SearchBar() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form className={styles.inputContainer} onSubmit={handleSubmit}>
      <input type="text" placeholder="Search items" />
      <label>
        <button type="submit" aria-label="Search">
          {/* <IoIosClose size={33} /> */}
          <IoMdSearch size={23} />
        </button>
      </label>
    </form>
  );
}

export { SearchBar };
