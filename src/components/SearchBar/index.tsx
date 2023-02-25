import { FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosClose, IoMdSearch } from 'react-icons/io';
import { changeSearchTerm } from '../../store/searchSlice';
import { selectSearchTerm } from '../../store/todoSlice';
import { Chips } from '../Chips';

import styles from './styles.module.scss';

function SearchBar() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    dispatch(changeSearchTerm(inputValue));
  }

  const term = useSelector(selectSearchTerm);

  useEffect(() => {
    setInputValue(term);
  }, [term]);

  return (
    <form className={styles.searchBarContainer} onSubmit={handleSubmit}>
      <Chips />

      <p className={styles.inputContainer}>
        <input
          aria-label="Search items"
          type="text"
          placeholder="Search items"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <label>
          {inputValue ? (
            <button type="reset" aria-label="Clear search">
              <IoIosClose size={33} onClick={() => setInputValue('')} />
            </button>
          ) : (
            <button type="submit" aria-label="Search">
              <IoMdSearch size={23} />
            </button>
          )}
        </label>
      </p>
    </form>
  );
}

export { SearchBar };
