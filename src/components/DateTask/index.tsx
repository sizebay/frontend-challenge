import { format } from "date-fns";
import { ContainerDate, Day, DayOfWeek, Header, Month, Year } from "./style";
export default function DateTask() {
  const date = format(new Date(), "dd-MMM-yyyy-EEEE").split("-");

  return (
    <Header>
      <ContainerDate>
        <Day>{date[0]}</Day>
        <div>
          <Month>{date[1]}</Month>
          <Year>{date[2]}</Year>
        </div>
      </ContainerDate>
      <DayOfWeek>{date[3]}</DayOfWeek>
    </Header>
  );
}
