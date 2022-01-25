import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow: hidden;
  height: 400px;
  width: 100%;

  p#searchAndClean {
    color: #848484;
    font-size: 0.85rem;

    span {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
