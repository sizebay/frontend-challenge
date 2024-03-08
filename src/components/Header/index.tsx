import { format } from "date-fns";
import {
  HeaderContainer,
  YearMonthContainer,
  DayNumber,
  Month,
  Year,
  CurrentDay,
} from "./styles";

const Header = () => {
  const [day, month, year, week] = format(new Date(), "dd-MMM-yyyy-EEEE").split("-");

  return (
    <HeaderContainer>
      <DayNumber>{day}</DayNumber>
      <CurrentDay>{week}</CurrentDay>
      <YearMonthContainer>
        <Month>{month}</Month>
        <Year>{year}</Year>
      </YearMonthContainer>
    </HeaderContainer>
  );
};

export default Header;
