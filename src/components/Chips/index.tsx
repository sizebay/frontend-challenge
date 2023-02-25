import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../store/filterSlice';
import { IoMdCheckmark } from 'react-icons/io';

import styles from './styles.module.scss';
import { selectFilter } from '../../store/todoSlice';

const filterChips = [
  { id: 1, filter: 'completed', label: 'Done' },
  { id: 2, filter: 'pending', label: 'Pending' },
];

function Chips() {
  const filter = useSelector(selectFilter);
  const [filterSelected, setFilterSelected] = useState<string>(filter);
  const dispatch = useDispatch();

  function handleClick(value: string) {
    dispatch(setFilter(value === filter ? 'all' : value));
  }

  useEffect(() => {
    setFilterSelected(filter);
  }, [filter]);

  return (
    <ul className={styles.chipsContainer}>
      {filterChips?.map(chip => (
        <li key={chip.id}>
          <button
            onClick={() => handleClick(chip.filter)}
            className={filterSelected === chip.filter ? styles.active : ''}
          >
            {filterSelected === chip.filter && <IoMdCheckmark size={15} />}
            {chip.label}
          </button>
        </li>
      ))}
    </ul>
  );
}

export { Chips };
