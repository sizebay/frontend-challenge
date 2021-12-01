import React, { useContext } from 'react';

import { itemContext } from '../../contexts/ItemContext';

import { getDayName, getMonth, numericDay, year } from '../../helpers/date';

import { DateContainer } from './Date';
import { ProgressBar } from './ProgressBar';

export default function Header() {
  const { itemsCollection } = useContext(itemContext);

  return (
    <>
      <DateContainer>
        <h1>{numericDay}</h1>
        <div>
          <h2>{getMonth()}</h2>
          <h3>{year}</h3>
        </div>
        <h2>{getDayName()}</h2>
      </DateContainer>

      <ProgressBar>
        <div id="filler"></div>
      </ProgressBar>
    </>
  );
}
