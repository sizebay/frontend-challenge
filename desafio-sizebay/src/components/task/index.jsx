import React, { useRef } from "react";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";

const TaskBox = styled.div`
  height: 400px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0px;
  }
  > div {
    display: flex;
  }
`;

const Task = styled.input.attrs({ type: "text" })`
  width: -webkit-fill-available;
  height: 48px;
  padding: 0 10px;
  margin-bottom: 8px;
  background: #f7f7f7;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  color: #848484;
  &:focus-visible {
    outline: 1px solid #dbdbdb;
    background: #fff;
  }
`;

const ModifyTaskButton = styled.button.attrs({ type: "button" })`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 48px;
  background: ${(props) => props.background};
  border: none;
  border-radius: 0px 4px 4px 0px;
  cursor: pointer;
  color: ${(props) => props.color};
  &:focus-visible {
    outline: none;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 23px;
    height: 23px;
    background: #fff;
    border-radius: 23px;
    font-size: 20px;
    font-weight: 600;
  }
`;

const TaskItem = (props) => {
  const { task, setTask, deleteData, updateStatus } = props;

  const inputRef = useRef();

  return (
    <TaskBox>
      {task?.length > 0 &&
        task?.map((i) => {
          return (
            <div key={i.id}>
              <Task
                readOnly
                id={i.id}
                value={i.description}
                ref={inputRef}
              />
              <ModifyTaskButton
                onClick={() => deleteData({ id: i.id, task, setTask })}
                background="#E34F4F"
                color="#FFF"
              >
                <svg
                  width={23.4}
                  height={23.4}
                  fill="#ffffff"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25Zm3.75 10.5h-7.5a.75.75 0 1 1 0-1.5h7.5a.75.75 0 1 1 0 1.5Z" />
                </svg>
              </ModifyTaskButton>
              <ModifyTaskButton
                name='description'
                onClick={() => updateStatus({ "id": i.id, 'description': i.description, "status": "done" })}
                background="#5DE290"
                color="#FFF"
              >
                <svg
                  width={23.4}
                  height={23.4}
                  fill="#ffffff"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25Zm5.074 6.482-6.3 7.5a.748.748 0 0 1-.562.268h-.013a.75.75 0 0 1-.557-.248l-2.7-3a.751.751 0 0 1 .88-1.186c.09.045.17.107.234.182l2.123 2.36 5.747-6.84a.75.75 0 0 1 1.148.964Z" />
                </svg>
              </ModifyTaskButton>
              <ToastContainer />
            </div>
          );
        })}
    </TaskBox>
  );
};

export default TaskItem;
