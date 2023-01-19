import React from "react";
import { ModalHeader, Day, MonthYear, Weekday, DateWrapper } from "./style";
const Calendar = () => {
  return (
    <ModalHeader>
      <DateWrapper>
        <Day>07</Day>
        <div>
          <MonthYear>Jul</MonthYear>
          <MonthYear>2021</MonthYear>
        </div>
      </DateWrapper>
      <Weekday>Wednesday</Weekday>
    </ModalHeader>
  );
};

export default Calendar;
