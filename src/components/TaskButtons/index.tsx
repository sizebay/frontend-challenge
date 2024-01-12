import styled from "styled-components";


interface TaskContainerProps {
  taskStyle?: string;
  backgroundColor?: string;
  opacity?: number;
}

const TaskButton = styled.button<TaskContainerProps>`
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) =>
    props.backgroundColor === "var(--warning-red)" ? "0px" : "0px 4px"};
  padding: 0px;
  color: var(--branco);
  border: 0px;
  height: 111%;
  margin-top: 3px !important;
  width: 48px;
  margin-top: 0px;
  align-items: center;
  justify-content: center;
  margin: 0;
  opacity: ${(props) => props.opacity};
`;

export default TaskButton;