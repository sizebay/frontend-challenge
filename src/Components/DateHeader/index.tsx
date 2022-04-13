import { useState } from "react";
import Headline from "../Headline";
import { Column, DateContainer, DateWrapper } from "./DateHeader";


function DateHeader() {

    const [ date ] = useState(new Date());

    const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return (
        <DateContainer>
            <DateWrapper>
                <Headline size={2} dataCy="date-day">{date.getDate().toString().padStart(2, '0')}</Headline>
                <Column>
                    <Headline size={5} dataCy="date-month" >{months[date.getMonth()]}</Headline>
                    <Headline size={5} variant="lighter" dataCy="date-year" >{date.getFullYear()}</Headline>
                </Column>
            </DateWrapper>
            <Headline size={4} dataCy="date-weekday" >{weekDays[date.getDay()]}</Headline>
        </DateContainer>
    )
}

export default DateHeader;