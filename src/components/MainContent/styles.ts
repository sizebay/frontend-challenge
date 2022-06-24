import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #ffffff;
  width: 95%;
  height: 650px;
  max-width: 800px;
  padding: 5rem 1rem 2rem 1rem;
  display: flex;
  flex-flow: column;
  gap: 10px;
  .blank-space {
    margin-bottom: 48px;
  }
  @media (min-width: 650px) {
    padding: 3rem 4rem;
  }
`;
