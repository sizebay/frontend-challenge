import styled from "styled-components";

export const SecaoCard = styled.section`
  display: flex;
  width: 100%;
  margin: 0;
  padding: 0;
  flex-direction: column;
  height: 216px;
  overflow: scroll;
  z-index: 999999;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 10px;
    background: #848484;
    border-radius:20px;
  }
`;