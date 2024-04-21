import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  padding: 20px 60px;
  width: 100%;
  height: 100vh;
  max-width: 800px;
  max-height: 650px;
  
  background: ${({ theme }) => theme.colors.whiteBasic};
  border-radius: 4px;
  
  @media (max-width: ${({theme}) => theme.breakpoints.Mobile}) {
    padding: 16px 18px;
    max-height: 780px;
  }
`