import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const DateContainer = styled.div`
  display: flex;
  align-items: center;

  .day {
    font-weight: medium;
    font-size: 3.75rem;
    letter-spacing: 0px;
  }

  .monthAndYear {
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
  }

  .monthAndYear > .month {
    font-weight: normal;
  }

  .monthAndYear > .year {
    font-weight: 300;
  }
`

export const WeekDay = styled.div`
  font-size: 1.5rem;
`