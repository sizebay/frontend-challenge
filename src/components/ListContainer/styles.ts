import styled from "styled-components";

export const Wrapper = styled.ul`
  display: flex;
  flex-flow: column;
  gap: 8px;
  height: 480px;
  max-height: 480px;
  overflow-y: scroll;
  width: 100%;
  align-self: center;
  max-width: 680px;
  @media (min-width: 680px) {
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
