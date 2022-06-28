import React from "react";

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
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const today: Date = new Date();
  return (
    <div>
      <div>
        <div>
          <span>{today.getDate()}</span>
        </div>
        <div>
          <span>{Months[today.getMonth()]}</span>
          <span>{today.getFullYear()}</span>
        </div>
      </div>
      <div> {DaysWeek[today.getDay()]}</div>
    </div>
  );
};

export default DayInfo;
