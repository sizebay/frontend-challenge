import moment from "moment";
import {
  DayOfWeek,
  DivDate,
  DivHeader,
  MonthAndYear,
  PDay,
  PMonth,
  PYear,
} from "./styles";

export const Header = () => {
  return (
    <DivHeader>
      <DivDate>
        <PDay>{moment().date()}</PDay>
        <MonthAndYear>
          <PMonth>{moment().format("MMM")}</PMonth>
          <PYear>{moment().format("YYYY")}</PYear>
        </MonthAndYear>
      </DivDate>
      <DayOfWeek>{moment().format("dddd")}</DayOfWeek>
    </DivHeader>
  );
};
