import styled from "styled-components";

export const ListContainer = styled.div`
  background-color: #fff;
  padding: 7px;
  border: 1px solid black;
  border-radius: 8px;
  color: var(--cinza);
  margin: 1em 0em;
  justify-content: center;
`;

export const TaskCard = styled.ul`
  justify-content: center;
  padding: 0;
`;

export const TaskDescription = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const DescriptionText = styled.p`
  font-size: 15px;
  text-align: left;
`;
