import styled from "styled-components";

interface TaskContainerProps {
  styleBackground?: string;
  styleBorder?: string;
  colorFont?: string;
}

export const AddTaskContainer = styled.div<TaskContainerProps>`
  position: relative;
  width: 100%;
  height: 48px;
  background: ${(props) => props.styleBackground};
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease;
  border: 1px solid var(--grey-light);
  border-radius: 4px;
  overflow: hidden;
  padding: 0;
`;

export const AddTaskForm = styled.form`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const AddTaskInput = styled.input<TaskContainerProps>`
  padding-left: 30px;
  border: none;
  color: ${(props) => props.colorFont};
  top: 0;
  height: 100%;
  width: 100%;
  background-color: transparent;
  outline: none;
  font-size: 16px;

  &::placeholder {
    color: ${(props) => props.colorFont};
  }

  &:focus {
    border-color: rgba(0, 0, 0, 0.3);
    &::placeholder {
      color: ${(props) => props.colorFont};
    }
  }
`;