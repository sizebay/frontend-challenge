import styled from 'styled-components'

export const DateContainer = styled.div`
    display: flex;
    margin-bottom: 24px;
`;

export const DayInfoContainer = styled.div`
    display: flex;
    width: 75%;
`;

export const DayNumber = styled.span`
    font-size: 60px;
    font-weight: 500;
`;

export const MonthYearContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    span {
        font-size: 24px;
    }
    .year {
        font-weight: 300;
    }
`;

export const DayWeekContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 24px;
`;
