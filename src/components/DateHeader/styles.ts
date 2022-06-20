import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .date-container {
    display: flex;
    align-items: center;
    gap: 3px;
    > h2 {
      font-size: var(--title-2);
      color: var(--primary-gray);
    }
    > div {
      display: flex;
      flex-flow: column;
      .month {
        font-weight: 500;
      }
      span {
        color: var(--primary-gray);
        font-size: var(--title-5);
      }
    }
  }
  > div {
    > h3 {
      font-size: var(--title-5);
      color: var(--primary-gray);
      font-weight: 500;
      margin-bottom: -27px;
    }
  }
`;
