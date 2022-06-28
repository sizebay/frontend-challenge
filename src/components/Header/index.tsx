import { getCurrentDate } from "../../utils/getCurrentDate";
import { DateContainer, DateMonth, DateNumber, DateYear, HeaderContainer, WeekDay } from "./styles";

export function Header() {
    return (
        <HeaderContainer>
            <DateContainer>
                <DateNumber>{String(getCurrentDate().dayNumber).padStart(2, '0')}</DateNumber>
                <DateMonth>{String(getCurrentDate().monthName).replace('.', '')}</DateMonth>
                <DateYear>{getCurrentDate().year}</DateYear>
            </DateContainer>
            <WeekDay>{getCurrentDate().dayName}</WeekDay>
        </HeaderContainer>
    );
}