import styled from "styled-components";

interface TaskContainerProps {
  taskStyle?: string;
  backgroundColor?: string;
  opacity?: number;
}

export const AddTaskContainer = styled.div`
  position: relative;
  width: 100%;
  height: 48px;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease;
  border: 1px solid ${({ theme }) => theme.colors.border};
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

export const AddTaskInput = styled.input`
  padding-left: 30px;
  border: none;
  color: ${({ theme }) => theme.colors.grey};
  top: 0;
  height: 100%;
  width: 100%;
  background-color: transparent;
  outline: none;
  font-size: 16px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey};
  }

  &:focus {
    border-color: rgba(0, 0, 0, 0.3);
    font-size: 16px;
    &::placeholder {
      color: ${({ theme }) => theme.colors.grey};
    }
  }
`;

export const SubmitTaskButton = styled.button<TaskContainerProps>`
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 0px 4px;
  padding: 0px;
  border: 0px;
  height: 111%;
  margin-top: 3px !important;
  width: 48px;
  align-items: center;
  justify-content: center;
  margin: 0;
  opacity: ${(props) => props.opacity};
`;