import { css, styled } from "styled-components";
import { ListStyle } from "./list.types";

export const ListContainer = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  gap: 8px;
`;
export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  width: 100%;
`;
export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`;

export const ItemBox = styled.div<ListStyle>`
  ${({ $hasOpacity, theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 48px;
    max-width: 100%;
    border: ${`1px solid ${theme.colors.grayBackgroundItem}`};
    background-color: ${theme.colors.grayBackgroundItem};
    border-radius: 4px;
    opacity: ${$hasOpacity ? 0.5 : 1};
    padding-left: 10.5px;
    flex-wrap: -ms-wrap-flow;
    font-family: ${theme.font.Regular};
    font-size: ${theme.fontSizes.Regular14};
    color: ${theme.colors.grayMiddle};
    &:focus-within {
      opacity: 1;
      background-color: ${theme.colors.whiteBasic};
    }
    &:hover {
      opacity: 1;
    }
  `}
`;
export const InputAddItem = styled.input`
  ${({ theme }) => css`
    all: unset;
    flex-grow: 1;
    font-family: ${theme.font.Regular};
    font-size: ${theme.fontSizes.Regular14};
    color: ${theme.colors.grayMiddle};
  `}
`;

export const ButtonsTaskContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 0;
  transition: width 0.3s linear;
  border: 0 transparent;
  gap: 0px;
  ${ItemBox}:hover & {
    width: 87px;
  }
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  width: 24;
  height: 24;
  background-color: ${({ theme }) => theme.colors.whiteBasic};
`;
