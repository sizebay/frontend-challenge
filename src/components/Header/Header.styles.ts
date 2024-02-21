import styled from 'styled-components';

export const HeaderContentWrapper = styled.div`
    padding: 54px 0px 24px 0px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
    overflow: hidden;

    @media (max-width: 768px) {
        padding: 32px 0px 24px 0px;
    }
`

export const HeaderContent = styled.div`
    display: flex;
    height: 79px;
    align-items: center;
`

export const Day = styled.span`
    font-size: 3.75rem;
    font-weight: 500;
`

export const Year = styled.span`
    font-weight: 300;
`

export const MonthAndYear = styled.div`
    display: grid;
    align-self: center;
    font-size: 1.5rem;
`

export const DayOfWeekContainer = styled.div`
    display: flex;
    align-items: center;
`

export const DayOfWeek = styled.span`
    font-size: 1.5rem;
`

export const LottieContainer = styled.div`
    position: absolute;
    margin-left: -60px;
`