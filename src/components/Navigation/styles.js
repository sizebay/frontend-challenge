import styled from 'styled-components';

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0 2rem 0;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
