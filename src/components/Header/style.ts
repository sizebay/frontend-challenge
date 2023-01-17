import styled from 'styled-components';

export const Container = styled.header`
  height: fit-content;
  display: flex;
  font-family: "Roboto";
  justify-content: space-between;
  align-items: flex-end;
  color: #848484;

  .weekday {
    font-size: 1.5rem;
  }
`;

export const DateContainer = styled.div`
  width: fit-content;
  display: grid;
  display: grid;
  grid-template-columns: 1fr 1fr;

  span {
    font-size: 3rem;
    font-weight: 700;
  }

  aside {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    span {
      font-size: 1.5rem;
      line-height: 1.5rem;
      font-weight: normal;
    }
  }
`;