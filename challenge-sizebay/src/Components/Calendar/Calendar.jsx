import React from "react";
import { getCurrentMonth } from "../../utils/getCurrentMonth";
import { getDayOfTheWeek } from "../../utils/getDayOfTheWeek";
import { ModalHeader, Day, MonthYear, Weekday, DateWrapper } from "./style";
const Calendar = () => {
  const date = new Date();
  return (
    <ModalHeader>
      <DateWrapper>
        <Day>{date.getDate()}</Day>
        <div>
          <MonthYear>{getCurrentMonth(date.getMonth())}</MonthYear>
          <MonthYear>{date.getFullYear()}</MonthYear>
        </div>
      </DateWrapper>
      <Weekday>{getDayOfTheWeek(date.getDay())}</Weekday>
    </ModalHeader>
  );
};

export default Calendar;
