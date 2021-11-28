import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { itemContext } from '../../contexts/ItemContext';

import { getDayName, getMonth, numericDay, year } from '../../helpers/date';

import { DateContainer } from './Date';
import { ProgressBar } from './ProgressBar';

export default function Header() {
  const { itemsCollection } = useContext(itemContext);

  return (
    <>
      <DateContainer>
        <Link to='/'>
          <h1>{numericDay}</h1>
        </Link>
        <div>
          <h2>{getMonth()}</h2>
          <h3>{year}</h3>
        </div>
        <h2>{getDayName()}</h2>
      </DateContainer>

      <ProgressBar itemQuantity={itemsCollection}>
        <div id="filler"></div>
      </ProgressBar>
    </>
  );
}
