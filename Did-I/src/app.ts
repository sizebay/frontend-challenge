import { css, styled } from "styled-components";

export const Box = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-left: 60px;
    padding-right: 60px;
    padding-top: 54px;
    width: 42.7vw;
    height: 70.3vh;
    gap: 24px;
    background-color: ${({ theme }) => theme.colors.whiteBasic};
    @media (max-width: ${theme.breakPoints.Tablets}px) {
      width: 85vw;
      height: 90vh;
      padding-left: 16px;
      padding-right: 16px;
    }
  `}
`;
