import React from "react";
import styled from "styled-components";

const DateBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 33px;
  font-size: 24px;
  color: #848484;
`;

const FirstBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    display: flex;
    flex-direction: column;
  }
`;

const Day = styled.span`
  font-size: 60px;
  margin-right: 5px;
`;

const Month = styled.span``;

const Year = styled.span`
  font-weight: 300;
`;

const SecondBox = styled.div`
  display: flex;
  align-items: end;
`;

const HeaderModal = () => {
  const date = new Date();
  const day = date.getDate();
  const year = date.getFullYear();
  const daysWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]
  const dayWeek = daysWeek[date.getDay()];
  const month = months[date.getMonth()];

  const normalizeDay = () => {
    if (day < 10) {
      return '0'+day
    }
    return day;
  }

  return (
    <section>
      <DateBox>
        <FirstBox>
          <Day>{normalizeDay()}</Day>
          <div>
            <Month>{month}</Month>
            <Year>{year}</Year>
          </div>
        </FirstBox>
        <SecondBox>
          <span>{dayWeek}</span>
        </SecondBox>
      </DateBox>
    </section>
  );
};

export default HeaderModal;
