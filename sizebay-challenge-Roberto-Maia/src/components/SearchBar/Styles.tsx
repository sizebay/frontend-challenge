import styled from "styled-components";

export const SearchAndDone = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 680px;
  height: 40px;

  @media (max-width: 600px) {
    width: 100%;
    flex-wrap: wrap-reverse;
    gap: 10px;
    margin: 40px 30px -10px 30px;
    justify-content: end;
  }
`;

export const DoneAndPending = styled.div<{ $bordercolor?: string }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: fit-content;
  height: fit-content;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 16px;
  border: 1px solid ${(props) => props.$bordercolor || "#dbdbdb"};
  letter-spacing: 0px;
  color: #848484;

  @media (max-width: 600px) {
    width: 100%;
    border: 2px solid ${(props) => props.$bordercolor || "#dbdbdb"};
  }
`;
