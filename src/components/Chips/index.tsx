import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdCheckmark } from 'react-icons/io';
import { setFilter } from '../../store/filterSlice';
import { selectFilter } from '../../store/todoSlice';

import styles from './styles.module.scss';

const filterChips = [
  { id: 1, filter: 'completed', label: 'Done' },
  { id: 2, filter: 'pending', label: 'Pending' },
];

function Chips() {
  const filter = useSelector(selectFilter);
  const [filterSelected, setFilterSelected] = useState<string>(filter);
  const dispatch = useDispatch();

  const handleClick = useCallback(
    (value: string) => {
      dispatch(setFilter(value === filter ? 'all' : value));
    },
    [dispatch, filter]
  );

  useEffect(() => {
    setFilterSelected(filter);
  }, [filter]);

  return (
    <ul className={styles.chipsContainer}>
      {filterChips?.map(chip => (
        <li
          key={chip.id}
          aria-label={`${chip.label} is selected.`}
          aria-selected={filterSelected === chip.filter ? true : false}
        >
          <button
            className={filterSelected === chip.filter ? styles.active : ''}
            onClick={() => handleClick(chip.filter)}
            type="button"
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
