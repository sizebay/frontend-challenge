import { format } from "date-fns";
import { ContainerDate, Day, DayOfWeek, Header, Month, Year } from "./style";
export default function DateTask() {
  const [day, month, year, week] = format(new Date(), "dd-MMM-yyyy-EEEE").split(
    "-"
  );

  return (
    <Header>
      <ContainerDate>
        <Day>{day}</Day>
        <div>
          <Month>{month}</Month>
          <Year>{year}</Year>
        </div>
      </ContainerDate>
      <DayOfWeek>{week}</DayOfWeek>
    </Header>
  );
}
