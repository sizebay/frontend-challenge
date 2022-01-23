import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0 2rem 0;

  // Mobile Configuration
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
