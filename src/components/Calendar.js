import React from "react";

export default function Calendar() {
  const monthNames = [
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

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const current = new Date();
  const date = current.getDate();
  const month = monthNames[current.getMonth()];
  const year = current.getFullYear();
  const day = weekday[current.getDay()];

  return (
    <div>
      {date} <br />
      {month}
      <br />
      {year}
      <br />
      {day}
    </div>
  );
}
