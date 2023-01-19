import React from "react";

import "../assets/styles/calendar.css";

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
    <div className='calendar-container'>
      <div className='calendar-left'>
        <div className='date'>{date}</div>
        <div className='month-and-year'>
          <div className='month'>{month}</div>
          <div className='year'>{year}</div>
        </div>
      </div>
      <div className='calendar-right'>
        <div className='day'>{day}</div>
      </div>
    </div>
  );
}
