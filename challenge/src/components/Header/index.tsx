import {
  HeaderContainer,
  YearMonthContainer,
  DayNumber,
  Month,
  Year,
  CurrentDay,
} from "./styles";

const Header = () => {
  const date = new Date();
  const dayNumber = String(date.getDate()).padStart(2, "0");
  let year = date.getFullYear();
  let month;
  let currentDay;

  switch (date.getMonth() + 1) {
    case 1:
      month = "Jan";
      break;
    case 2:
      month = "Fev";
      break;
    case 3:
      month = "Mar";
      break;
    case 4:
      month = "April";
      break;
    case 5:
      month = "May";
      break;
    case 6:
      month = "Jun";
      break;
    case 7:
      month = "Jul";
      break;
    case 8:
      month = "Aug";
      break;
    case 9:
      month = "Sep";
      break;
    case 10:
      month = "Oct";
      break;
    case 11:
      month = "Nov";
      break;
    case 12:
      month = "Dec";
      break;
    default:
      break;
  }

  switch (date.getDay()) {
    case 0:
      currentDay = "Sunday";
      break;
    case 1:
      currentDay = "Monday";
      break;
    case 2:
      currentDay = "Tuesday";
      break;
    case 3:
      currentDay = "Wednesday";
      break;
    case 4:
      currentDay = "Thursday";
      break;
    case 5:
      currentDay = "Friday";
      break;
    case 6:
      currentDay = "Saturday";
      break;
    default:
      break;
  }
  return (
    <HeaderContainer>
      <DayNumber>{dayNumber}</DayNumber>
      <CurrentDay>{currentDay}</CurrentDay>
      <YearMonthContainer>
        <Month>{month}</Month>
        <Year>{year}</Year>
      </YearMonthContainer>
    </HeaderContainer>
  );
};

export default Header;
