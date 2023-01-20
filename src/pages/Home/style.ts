import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  min-width: 370px;
  max-width: 800px;
  margin: 1rem auto;
  gap: 1.3rem;

  @media only screen and (max-width: 530px)  {
    width: calc(100vw - 20px);
  }
`;

export const FilterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  padding: 0.3rem 0;

  .input-box {
    display: flex;
    gap: 0.5rem;
  }

  @media only screen and (max-width: 530px) {
    display: flex;
    flex-direction: column-reverse;
    gap: 0.5rem;

    .input-box {
      align-self: flex-end;
    }
  }
`;

export const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  div {
    margin: 0;
  }
`;