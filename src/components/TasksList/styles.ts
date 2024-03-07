import styled from "styled-components";

export const SecaoCard = styled.section`
  display: flex;
  width: 100%;
  margin: 0;
  padding: 0;
  flex-direction: column;
  gap: 13px;
  height: 216px;
  overflow: scroll;
  z-index: 999999;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 10px;
    background: #848484;
    border-radius: 20px;
  }
`;

export const NoResultsMessage = styled.span`
  text-align: left;
  display: flex;
  color: var(--grey-dark);
`;
export const ClearSearchButton = styled.span`
  padding: 0px 4px 0px 4px;
  text-decoration: underline;
`;