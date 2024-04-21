import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 100vh;

  background: ${({theme}) => theme.colors.grayDark};

  @media (max-width: 768px){
    padding: 16px 18px;
  }
`