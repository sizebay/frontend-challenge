import React from "react";
import { format } from "date-fns";
import {
  DateTimeDisplayContainer,
  DateContainer,
  LargeText,
  SmallText,
  DayOfWeek,
} from "./style";

function DateTimeDisplay() {
  const currentDate = new Date();
  const dayOfWeek = format(currentDate, "EEEE");
  const dayOfMonth = format(currentDate, "dd");
  const month = format(currentDate, "MMM");
  const year = format(currentDate, "yyyy");

  return (
    <DateTimeDisplayContainer>
      <LargeText>{dayOfMonth}</LargeText>
      <DateContainer>
        <SmallText>{month}</SmallText>
        <SmallText>{year}</SmallText>
      </DateContainer>
      <DayOfWeek>{dayOfWeek}</DayOfWeek>
    </DateTimeDisplayContainer>
  );
}

export default DateTimeDisplay;
