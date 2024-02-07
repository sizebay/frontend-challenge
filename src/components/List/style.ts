import styled from "styled-components";
import { device } from "../../styles";

export const ListContainer = styled.section`
  overflow-y: scroll;
  max-height: 50%;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-right: 6px;

  @media ${device.mobileL} {
    max-height: 60%;
  }

  ::-webkit-scrollbar {
    width: 0.5em;
    border-radius: 9px;
  }
  ::-webkit-scrollbar-track {
    background-color: #E4E4E4;
    border-radius: 9px;
  }
  ::-webkit-scrollbar-thumb {
  background-color: #848484;
  border-radius: 9px;
`
;

export const DisabledInput = styled.p`
  background-color: #f7f7f8;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  padding: 1rem 1.2rem;
  width: 100%;
  margin: 0;
`;