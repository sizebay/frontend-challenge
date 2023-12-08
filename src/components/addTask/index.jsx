import React, {useState, useRef} from 'react';
import styled from 'styled-components';

const BoxCreateTask = styled.div`
  display: flex;
  margin-bottom: 16px;
`

const CreateTaskInput = styled.input.attrs({type: "text"})`
  width: -webkit-fill-available;
  height: 48px;
  padding: 0 10px;
  background: #F7F7F7;
  border: 1px solid #DBDBDB;
  border-radius: 4px;
  color: #848484;
  &:focus-visible {
    outline: 1px solid #DBDBDB;
    background: #FFF;
  }
`;

const CreateTaskButton = styled.button.attrs({type: 'button'})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  background: #4DA6B3 0% 0% no-repeat padding-box;
  border: none;
  border-radius: 0px 4px 4px 0px;
  cursor: pointer;
  color: #4DA6B3;
  &:focus-visible{
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
    background: #FFF;
    border-radius: 23px;
    font-size: 20px;
    font-weight: 600;
  }
`

const AddTask = (props) => {
  const {addTask, task, setTask} = props
  const [descriptionTask, setDescriptionTask] = useState('')
  const inputRef = useRef();
  const params = {
    id: null,
    description: descriptionTask,
    status: 'pending',
    task,
    setTask
  }

  const submitData = async() => {
    addTask(params)
    setDescriptionTask('')
  }
  return (
    <form onSubmit={(ev)=> {
      submitData()
      ev.preventDefault()
    }}>
      <BoxCreateTask>
        <CreateTaskInput value={descriptionTask} onChange={(ev) => setDescriptionTask(ev.target.value)} ref={inputRef} type="text" name="Create task" id="create-task" placeholder='Add new item' />
        <CreateTaskButton disabled={descriptionTask === '' ? true : false} onClick={()=> submitData()}>
          <span>+</span>
        </CreateTaskButton>
      </BoxCreateTask>
    </form>
  );
}

export default AddTask;
