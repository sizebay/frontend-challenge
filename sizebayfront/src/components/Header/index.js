import React, { useEffect, useState } from 'react';

import { getDayName, getMonth, numericDay, year } from '../../helpers/date';

import { useItem } from '../../contexts/item';

import { DateContainer } from './Date';
import { ProgressBar } from './ProgressBar';

export default function Header() {
  /*
    SITUAÇÕES QUE SERÁ RENDERIZADO NOVAMENTE:
    - Ao adicionar um novo ITEM
  */
  const { doneTasks, itemsCollection } = useItem();

  console.log('HEADER ' + doneTasks)

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

      <ProgressBar doneTasks={doneTasks} totalItems={itemsCollection.length}>
        <div id="filler"></div>
      </ProgressBar>
    </>
  );
}
