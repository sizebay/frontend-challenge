import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
  gap: 1rem;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const Column = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

export const ColumnButtons = styled(Column)`
  justify-content: flex-start;
  gap: 1rem;

  @media (max-width: 600px) {
    justify-content: flex-end;
  }
`;

export const ColumnSearchBar = styled(Column)`
  justify-content: flex-end;
`;
