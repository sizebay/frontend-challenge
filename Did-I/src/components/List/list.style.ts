import { styled } from "styled-components";

export const ListContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
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
  height: 50%;
  overflow-y: auto;
  gap: 16px;
`;
