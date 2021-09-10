import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 800px;
  height: 650px;

  padding: 0 60px;
  background-color: var(--white);
  border-radius: 4px;
  box-shadow: var(--box-shadow) 0 3px 6px;
`;
