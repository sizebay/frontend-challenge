import { styled } from "styled-components";

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
  width: 100%;
`;
export const ItemBox = styled.div`
  display: flex;
  height: 48px;
  width: 100%;
  border: ${({ theme }) => `1px solid ${theme.colors.grayBackgroundItem}`};
  background-color: ${({ theme }) => theme.colors.grayBackgroundItem};
  border-radius: 4px;
`;
export const InputAddItem = styled.input`
  all: unset;
  flex-grow: 1;
  padding-left: 10.5px;
  &:focus {
    background-color: ${({ theme }) => theme.colors.whiteBasic};
  }
`;

export const AddButton = styled.button`
  cursor: pointer;
  border: 0 transparent;
  background-color: ${({ theme }) => theme.colors.greenAddItem};
  width: 44px;
  height: 48px;
  border-radius: 0px 4px 4px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
