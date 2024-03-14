import styled from "styled-components";

interface TaskContainerProps {
  taskStyle?: string;
}

export const TaskContainer = styled.div<TaskContainerProps>`
  border: 1px solid var(--grey-light);
  background-color: ${(props) => props.taskStyle};
  border-radius: 8px;
  color: var(--grey-dark);
  justify-content: left;
  border-radius: 4px;
  padding-left: 1em;
  display: flex;
  position: relative;
  height: 48px;
  align-items: center;
  overflow: hidden;
  z-index: 0;
  &:input:focus {
    outline: none;
    }
`;

export const TaskCard = styled.ul`
  justify-content: center;
  padding: 0;
  line-height: 0px;
`;

export const DescriptionText = styled.p<TaskContainerProps>`
  font-size: 15px;
  text-align: left;
  text-decoration-line: ${(props) => props.taskStyle};
`;

export const TaskButtonsContainer = styled.div`
  position: absolute;
  right: 0px;
  height: 119%;
  margin-top: -10px;
  padding: 0;
  width: 96px;
  align-items: center;
  justify-content: center;
`;

export const TaskTooltipContainer = styled.div<TaskContainerProps>`
  position: absolute;
  overflow: visible !important;
  bottom: -30px;
  position: absolute;
  display: ${(props) => props.taskStyle};
  z-index: 100000 !important;
  left: calc(50% - 40px);
`;

export const TaskPseudoContainer = styled.div`
  position: relative;
`;
