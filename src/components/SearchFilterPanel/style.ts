import { MdOutlineSearch } from "react-icons/md";
import styled from "styled-components";

export const ButtonsContainer = styled.div`
  height: 24px;
  border-radius: 4px;
  margin-top: 2px;
  text-align: left;
  display: flex;
  align-items: center;
`;

export const ContainerControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0;
`;

export const IconSearch = styled(MdOutlineSearch)`
  color: ${(props) => props.theme.colors.gray};
  font-size: 24px;
`;

export const TaskList = styled.ul`
  padding: 0;
  margin: 0;
`;

export const TaskListItem = styled.li``;
