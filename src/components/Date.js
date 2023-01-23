import styled from 'styled-components'

const DateContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 24px;

    @media (max-width: 992px) {
        margin-top: 50px;
    }
`

const Day = styled.div`
    font-size: 60px;
    font-weight: 500;
`

const Month = styled.div`
    font-weight: 400;
    font-size: 24px;
    line-height: 24px;
    margin-top: 12px;
`

const Year = styled.div`
    font-size: 24px;
    line-height: 24px;
`

const DayOfWeek = styled.div`
    display: flex;
    font-size: 24px;
    padding-bottom: 10px;
    margin-left: auto;
    font-weight: 400;

    > span {
        align-self: flex-end;
    }
`

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