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
  > p {
    color: var(--primary-gray);
    font-size: 14px;
    > span {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  @media (min-width: 680px) {
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
