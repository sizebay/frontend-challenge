import styled from 'styled-components'

export const DateContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const DayInfoContainer = styled.div`
    width: 100%;
    display: flex;
`;

export const DayNumber = styled.span`
    font-size: 3.5rem;
    font-weight: 500;
`;

export const MonthYearContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    span, strong {
        font-size: 1.15rem;
    }
    strong{
        font-weight: 600;
    }
    .year {
        font-weight: 300;
    }
`;

export const DayWeekContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 2rem;

    span{
        font-size: 1.35rem;
        font-weight: 500;
    }
`;