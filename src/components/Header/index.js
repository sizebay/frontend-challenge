import React from 'react';
import { getDayName, getMonth, numericDay, year } from '../../helpers/date';
import { useItem } from '../../contexts/item';
import { DateContainer } from './Date';
import { ProgressBar } from './ProgressBar';

export default function Header() {
  const { itemsCollection } = useItem();

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

      <ProgressBar
        doneTasks={(itemsCollection.filter(item => item.isPending === false)).length}
        totalItems={itemsCollection.length}
      >
        <div id="filler"></div>
      </ProgressBar>
    </>
  );
}
