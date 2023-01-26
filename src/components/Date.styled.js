import styled from 'styled-components'

export const DateContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 24px;

    @media (max-width: 992px) {
        margin-top: 50px;
    }
`

export const Day = styled.div`
    font-size: 60px;
    font-weight: 500;
`

export const Month = styled.div`
    font-weight: 400;
    font-size: 24px;
    line-height: 24px;
    margin-top: 12px;
`

export const Year = styled.div`
    font-size: 24px;
    line-height: 24px;
`

export const DayOfWeek = styled.div`
    display: flex;
    font-size: 24px;
    padding-bottom: 10px;
    margin-left: auto;
    font-weight: 400;

    > span {
        align-self: flex-end;
    }
`