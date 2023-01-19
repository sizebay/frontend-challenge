import styled from "styled-components";
import { palette } from "../../colors/colors";

export const ListItem = styled.li`
  width: 100%;
  font-size: 14px;
  border: 1px solid ${palette.lightGrey};
  padding: 16px 0 16px 16px;
  color: ${palette.grey};
  background-color: ${palette.offwhite};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    padding-left: 16px;
  }
  &:not(:hover) {
    & > div {
      display: none;
    }
  }
`;

export const ButtonsContainer = styled.div`
  margin-left: auto;
  display: flex;
`
export const RemoveButton = styled.button`
  width: 44px;
  height: 44px;
  background-color: ${palette.red};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: all .3s ease;

  &:hover {
    opacity: 0.7;
  }
`;

export const CompleteButton = styled(RemoveButton)`
  background-color: ${palette.green};
`;

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: auto;
  max-height: 216px;
  padding-right: 4px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${palette.lightGrey};
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${palette.grey};
    border-radius: 8px;
  }
`;
