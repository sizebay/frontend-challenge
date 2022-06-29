import styled from 'styled-components';

export const TaskListContainer = styled.div`
  width: 100%;
  height: calc(100% - 210px);
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;

  
  @media (max-width: 800px) {
    height: calc(100% - 300px);
  }
`;
