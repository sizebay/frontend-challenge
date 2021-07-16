import React from "react";
import {
  DateHeaderContainer,
  DateHeaderColumnLeft,
  DateHeaderColumnRight,
} from "./styles";
import CalendarDate from "./CalendarDate";
import WeekDay from "./WeekDay";

function DateHeader() {
  const [day, setDay] = React.useState("");
  const [month, setMonth] = React.useState("");
  const [year, setYear] = React.useState("");

  const [dayOfWeek, setDayOfWeek] = React.useState("");

  React.useEffect(() => {
    const date = new Date();

    const day = date.toLocaleString().split("/")[0];
    const month = date.getMonth();
    const year = date.getFullYear().toString();

    const dayOfWeek = date.getDay();

    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    const months = new Array(12);
    months[0] = "Jan";
    months[1] = "Feb";
    months[2] = "Mar";
    months[3] = "Apr";
    months[4] = "May";
    months[5] = "Jun";
    months[6] = "Jul";
    months[7] = "Aug";
    months[8] = "Sep";
    months[9] = "Oct";
    months[10] = "Oct";
    months[11] = "Nov";
    months[12] = "Dec";

    setDay(day);
    setMonth(months[month]);
    setYear(year);

    setDayOfWeek(weekday[dayOfWeek]);
  }, []);

  return (
    <DateHeaderContainer>
      <DateHeaderColumnLeft>
        <CalendarDate day={day} month={month} year={year} />
      </DateHeaderColumnLeft>
      <DateHeaderColumnRight>
        <WeekDay dayOfWeek={dayOfWeek} />
      </DateHeaderColumnRight>
    </DateHeaderContainer>
  );
}

export default DateHeader;
