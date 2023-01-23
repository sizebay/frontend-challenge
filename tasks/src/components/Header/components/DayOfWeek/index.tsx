import { DateContainer, DayInfoContainer, DayNumber, MonthYearContainer, DayWeekContainer } from "./styles";

export function DayOfWeek(){
  const DaysWeek = [ "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const Months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const today: Date = new Date();
  
  return(
    <DateContainer>
      <DayInfoContainer>
        <DayNumber>
          {today.getDate()}
        </DayNumber>
        <MonthYearContainer>
          <strong className="month">{Months[today.getMonth()]}</strong>
          <span className="year">{today.getFullYear()}</span>
        </MonthYearContainer>
      </DayInfoContainer>
      <DayWeekContainer>
        <span>{DaysWeek[today.getDay()]}</span>
      </DayWeekContainer>
    </DateContainer>
  )
}