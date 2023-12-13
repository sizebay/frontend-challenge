import styled from "styled-components";

export const ListContainer = styled.div`
  background-color: #fff;
  padding: 7px;
  box-shadow: 2px 2px 8px rgb(0, 0, 0, 0.15);
  border-radius: 8px;
  color: var(--cinza);
  margin: 1em 1em 1em;
  justify-content: center;
`;

export const TaskCard = styled.ul`
  justify-content: center;
`;

export const TaskDescription = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 10px;
`;

export const DescriptionText = styled.p`
  font-size: 15px;
`;
