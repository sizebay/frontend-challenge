import React from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import { ModalHeader, Day, MonthYear, Weekday, DateWrapper } from "./style";

const Calendar = () => {
  const date = new Date();
  function getCurrentMonth(month) {
    const date = new Date();
    date.setMonth(month);
    return date.toLocaleString('en-us', { month: 'long' });
  }
  function getDayOfTheWeek() {
    return date.toLocaleString("en-us", {weekday: "long"})
  }
  return (
    <>
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
      <ProgressBar/>
    </>
  );
};

export default Calendar;
