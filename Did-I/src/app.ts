import { styled } from "styled-components";

export const Box = styled.section`
  display: flex;
  flex-direction: column;
  padding-left: 60px;
  padding-right: 60px;
  padding-top: 54px;
  width: 800px;
  height: 650px;
  gap: 24px;
  background-color: ${({ theme }) => theme.colors.whiteBasic};
`;
