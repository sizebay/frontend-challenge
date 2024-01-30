import styled from 'styled-components';

export const CenteredSquare = styled.div`
  max-width: 800px;
  width: 100%;
  height: 650px;
  background-color: ${(props) => props.theme.colors.background.white};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4px;

  @media(max-width: 768px) {
    width: 95%;
  }
}
`;

export const Main = styled.div`
  margin: 64px 34px;
`;