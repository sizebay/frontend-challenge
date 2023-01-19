import styled from "styled-components";
import { palette } from "../../colors/colors";

export const ListItem = styled.li`
  width: 100%;
  font-size: 14px;
  border: 1px solid ${palette.lightGrey};
  padding: 14px 16px;
  color: ${palette.grey};
`;

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: scroll;
  max-height: 216px;

  &:webkit-scrollbar {
    color: black;
  }
`;

