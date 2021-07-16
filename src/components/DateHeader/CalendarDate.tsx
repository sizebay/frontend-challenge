import React from "react";
import {
  DateDayText,
  DateMonthWeekDayText,
  DateYearText,
  DateContainer,
  DateDayContainer,
  DateMonthYearContainer,
} from "./styles";

interface Props {
  day: string;
  month: string;
  year: string;
}

function CalendarDate(props: Props) {
  const { day, month, year } = props;

  return (
    <DateContainer>
      <DateDayContainer>
        <DateDayText>{day}</DateDayText>
      </DateDayContainer>
      <DateMonthYearContainer>
        <DateMonthWeekDayText>{month}</DateMonthWeekDayText>
        <DateYearText>{year}</DateYearText>
      </DateMonthYearContainer>
    </DateContainer>
  );
}

export default CalendarDate;
