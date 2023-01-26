// Styled
import { 
    DateContainer, 
    Day, 
    Month, 
    Year, 
    DayOfWeek 
} from "./Date.styled"

const DateNow = () => {
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]

    const date = new Date()

    return (

        <DateContainer>

            <Day>{ String(date.getDate()).padStart(2, '0') }</Day>

            <div>
                <Month>{ months[date.getMonth()] }</Month>
                <Year>{ date.getFullYear() }</Year>
            </div>
            
            <DayOfWeek>
                <span>{ days[date.getDay()] }</span>
            </DayOfWeek>

        </DateContainer>

    )
}

export default DateNow