import {useState} from "react";
import styled from "styled-components";

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Date = styled.div`
    display: flex;
    flex-direction: row;
`;

const SideContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Day = styled.div`
    text-align: left;

    color: #848484;
    font-size: 70px;

    height: auto;
`;
const Month = styled.div`
    text-align: left;

    color: #848484;

    font-size: 24px;
`;
const Year = styled.div`
    text-align: left;
    font-family: "Roboto light";

    color: #848484;

    font-size: 24px;
    font-weight: thin;
`;

const WeekDay = styled.div`
    text-align: right;

    letter-spacing: 0px;
    color: #848484;
    opacity: 1;
    font-size: 24px;
`;
function DateHeader() {
    var [date, setDate] = useState(new window.Date());

    const weekDay = date.toLocaleString("en-us", {weekday: "long"});
    const month = date.toLocaleString("en-us", {month: "short"});
    const day = date.getDate();
    const year = date.getFullYear();

    return (
        <>
            <Header>
                <Date>
                    <Day>{day}</Day>
                    <SideContainer>
                        <Month>{month}</Month>
                        <Year>{year}</Year>
                    </SideContainer>
                </Date>

                <WeekDay>{weekDay}</WeekDay>
            </Header>
        </>
    );
}

export default DateHeader;
