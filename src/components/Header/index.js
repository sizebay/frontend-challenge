import React from 'react';

import { getDayName, getMonth, numericDay, year } from '../../helpers/date';

import { useItem } from '../../contexts/ItemProvider';

import { HeaderContainer, DateContainer, ProgressBar, FillingProgressBar } from './styles';

export default function Header() {
  const { itemsCollection } = useItem();
  const month = getMonth();
  const dayName = getDayName();

  return (
    <HeaderContainer>
      <DateContainer>
        <p id="numericDay">{numericDay}</p>
        <div>
          <p id="month">{month}</p>
          <p id="year">{year}</p>
        </div>
        <p id="dayName">{dayName}</p>
      </DateContainer>

      <ProgressBar>
        <FillingProgressBar
          doneTasks={(itemsCollection.filter(item => item.isPending === false)).length}
          totalItems={itemsCollection.length}
        />
      </ProgressBar>
    </HeaderContainer>
  );
}
