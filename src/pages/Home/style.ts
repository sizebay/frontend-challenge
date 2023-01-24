import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media screen and (max-width: 800px) {
    padding: 18px;
    align-items: stretch;
  }
`;

export const Main = styled.main`
  max-width: 800px;
  width: 100%;
  height: 650px;
  border-radius: 4px;
  padding: 54px 60px;
  background-color: ${({ theme }) => theme.colors.background.primary};

  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (max-width: 800px) {
    padding: 48px 16px;
    max-height: auto;
    height: 100%;
  }
`;

export const Actions = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    flex-direction: column-reverse;
    align-items: stretch;
    gap: 10px;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
