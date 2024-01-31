import styled from "styled-components";

export const Container = styled.main`
  text-align: center;
`;

export const Header = styled.div`
  background-color: ${(props) => props.theme.colors.background.darkGray};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
  }
`;
