import React, { useEffect, useState } from "react";
import { CurrentDate } from "../../types/date";
import { format } from "date-fns";
import { DateContainer, HeaderContainer, WeekDay } from "./style";

export default function DateHeader() {
  const [currentDate, setCurrentDate] = useState<CurrentDate>();

  useEffect(() => {
    const date = new Date();
    setCurrentDate({
      day: format(date, "dd"),
      month: format(date, "MMM"),
      weekDay: format(date, "EEEE"),
      year: format(date, "y"),
    });
  }, []);

  return (
    <HeaderContainer>
      <DateContainer>
        <span className="day">{currentDate?.day}</span>
        <div className="monthYear">
          <span className="month">{currentDate?.month}</span>
          <span className="year">{currentDate?.year}</span>
        </div>
      </DateContainer>
      <WeekDay>{currentDate?.weekDay}</WeekDay>
    </HeaderContainer>
  );
}
