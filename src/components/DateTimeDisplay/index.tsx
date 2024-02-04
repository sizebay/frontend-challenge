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
      <LargeText data-testid="large-text">{dayOfMonth}</LargeText>
      <DateContainer data-testid="small-text">
        <SmallText>{month}</SmallText>
        <SmallText>{year}</SmallText>
      </DateContainer>
      <DayOfWeek data-testid="day-of-week">{dayOfWeek}</DayOfWeek>
    </DateTimeDisplayContainer>
  );
}

export default DateTimeDisplay;
