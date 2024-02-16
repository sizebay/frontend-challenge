import styled from "styled-components";
import { device } from "../../styles";

export const FiltersContainer = styled.section`
  margin-bottom: 1rem;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (min-width: 1024px) and (max-width: 1650px) {
    gap: 1rem;
  }

  @media (max-width: 1023px) {
    flex-flow: wrap-reverse;
    gap: 0.6rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: start;
  gap: 0.6em;
  @media (min-width: 320px) and (max-width: 1650px) {
    width: 100%;
    justify-content: end;
  }
`;
