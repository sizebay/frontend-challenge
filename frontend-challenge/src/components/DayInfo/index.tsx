import React from "react";
import { DateContainer, DayInfoContainer, MonthYearContainer, DayNumber, DayWeekContainer } from "./styles";

const DayInfo = () => {
  const DaysWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const Months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const today: Date = new Date();
  return (
    <DateContainer>
      <DayInfoContainer>
        <DayNumber>
          {today.getDate()}
        </DayNumber>
        <MonthYearContainer>
          <span className="month">{Months[today.getMonth()]}</span>
          <span className="year">{today.getFullYear()}</span>
        </MonthYearContainer>
      </DayInfoContainer>
      <DayWeekContainer>
        <span>{DaysWeek[today.getDay()]}</span>
      </DayWeekContainer>
    </DateContainer>
  );
};

export default DayInfo;
