import styled from "styled-components";
import { device } from "../../styles";

export const FiltersContainer = styled.section`
  margin-bottom: 1rem;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media ${device.mobileL} {
    flex-flow: wrap-reverse;
    gap: 0.6rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: start;
  gap: 0.6em;
  @media ${device.mobileL} {
    width: 100%;
    justify-content: end;
  }
`;
