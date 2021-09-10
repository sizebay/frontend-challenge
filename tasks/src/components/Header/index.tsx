import React, { useMemo } from 'react';
import moment from 'moment';

import { Container, DateContainer, DayOfWeek } from './styles';

const Header: React.FC = () => {
  const formattedDate = useMemo(() => {
    return {
      date: {
        day: moment().format('DD'),
        month: moment().format('MMM'),
        year: moment().format('YYYY'),
      },
      dayOfWeek: moment().format('dddd'),
    };
  }, []);

  return (
    <Container>
      <DateContainer>
        <strong>{`${formattedDate.date.day}`}</strong>
        <div>
          <strong>{`${formattedDate.date.month}`}</strong>
          <p>{`${formattedDate.date.year}`}</p>
        </div>
      </DateContainer>
      <DayOfWeek>{formattedDate.dayOfWeek}</DayOfWeek>
    </Container>
  );
};

export default Header;
