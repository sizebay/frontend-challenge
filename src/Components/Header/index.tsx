import { getCurrentDate } from '../../Utils/GetCurrentDate';
import { DateHolder, DateMonth, DateNumber, DateYear, HeaderContainer, WeekDay } from './styles';

export function Header() {
    return (
        <HeaderContainer>
            <DateHolder>
                <DateNumber>{String(getCurrentDate().dayNumber).padStart(2, '0')}</DateNumber>
                <DateMonth>{getCurrentDate().monthName}</DateMonth>
                <DateYear>{getCurrentDate().year}</DateYear>
            </DateHolder>
            <WeekDay>{getCurrentDate().dayName}</WeekDay>
        </HeaderContainer>
    );
}