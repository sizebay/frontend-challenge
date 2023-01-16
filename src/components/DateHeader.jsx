import React from "react";
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
    font-family: Roboto;
    color: #848484;
    font-size: 70px;

    height: auto;
`;
const Month = styled.div`
    text-align: left;
    font-family: Roboto;

    color: #848484;

    font-size: 24px;
`;
const Year = styled.div`
    text-align: left;
    font-family: Roboto light;

    color: #848484;

    font-size: 24px;
    font-weight: thin;
`;

const WeekDay = styled.div`
    text-align: right;
    font-family: Roboto;
    letter-spacing: 0px;
    color: #848484;
    opacity: 1;
    font-size: 24px;
`;
function DateHeader() {
    return (
        <>
            <Header>
                <Date>
                    <Day>09</Day>
                    <SideContainer>
                        <Month>Jul</Month>
                        <Year>2021</Year>
                    </SideContainer>
                </Date>

                <WeekDay>Wednesday</WeekDay>
            </Header>
        </>
    );
}

export default DateHeader;
