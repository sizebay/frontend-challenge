import styled from "styled-components";

export const ListContainer = styled.div`
  border: 1px solid var(--grey-light);
  background-color: var(--grey);
  border-radius: 8px;
  color: var(--grey-dark);
  margin: 1em 0em;
  justify-content: center;
  border-radius: 4px;
  padding: 0em 1em;
`;

export const TaskCard = styled.ul`
  justify-content: center;
  padding: 0;
`;

export const DescriptionText = styled.p`
  font-size: 15px;
  text-align: left;
`;
