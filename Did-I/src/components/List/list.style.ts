import { css, styled } from "styled-components";

export const ListContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 24px;
`;
export const ButtonsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    gap: 8px;
    @media (max-width: ${theme.breakPoints.Tablets}px) {
      width: 100%;
      justify-content: flex-end;
    }
  `}
`;
export const FiltersContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    width: 100%;
    @media (max-width: ${theme.breakPoints.Tablets}px) {
      gap: 11px;
      flex-direction: column-reverse;
      height: fit-content;
    }
  `}
`;
export const ItemsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: 50%;
    overflow-y: auto;
    gap: 16px;
    @media (max-width: ${theme.breakPoints.Tablets}px) {
      width: 100%;
      height: 60%;
    }
    @media (max-width: ${theme.breakPoints.Mobile}px) {
      width: 100%;
      height: 44%;
    }
  `}
`;
