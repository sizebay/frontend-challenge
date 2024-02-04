import { MdOutlineSearch } from "react-icons/md";
import styled from "styled-components";

export const ButtonsContainer = styled.div`
width: 173px;
  height: 32px;
  border-radius: 4px;
  margin-top: 2px;
  text-align: left;
  justify-content: space-between;
  display: flex;
`;

export const ContainerControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0;
`;

export const IconSearch = styled(MdOutlineSearch)`
  color: ${(props) => props.theme.colors.gray};
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

export const TaskList = styled.ul`
  padding: 0;
  margin: 0;
`;

export const TaskListItem = styled.li``;
