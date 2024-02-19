import { DateContainer, WeekDay, Wrapper } from './styles'

import { format } from 'date-fns'

export function DateHeader() {
  const date = new Date();
  const weekDay = format(date, "EEEE");
  const day = format(date, "dd");
  const month = format(date, "MMM");
  const year = format(date, "yyyy");

  return (
    <Wrapper>
      <DateContainer>
        <span className="day">{day}</span>
        <div className="monthAndYear">
          <span className="month">{month}</span>
          <span className="year">{year}</span>
        </div>
      </DateContainer>
      <WeekDay>{weekDay}</WeekDay>
    </Wrapper>
  )
}