import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  background: #FFFFFF;
  border-radius: 4px;
  padding: 3.2rem 3rem 2rem 3rem;

  height: 68.85vh;
  width: 41.66vw;

  @media (max-width: 768px) {
    height: 84vh;
    width: 84vw;
    padding: 3.2rem 1rem 2rem 1rem;
  }
`;
