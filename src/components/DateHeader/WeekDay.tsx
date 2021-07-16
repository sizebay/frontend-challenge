import React from "react";
import { DateMonthWeekDayText } from "./styles";

interface Props {
  dayOfWeek: string;
}

function WeekDay(props: Props) {
  const { dayOfWeek } = props;

  return <DateMonthWeekDayText>{dayOfWeek}</DateMonthWeekDayText>;
}

export default WeekDay;
