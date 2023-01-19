import styled from "styled-components";
import {keyframes} from "styled-components";

import {useContext, useState} from "react";
import {TasksContext} from "../contexts/Tasks";

import {AiFillMinusCircle, AiFillCheckCircle} from "react-icons/ai";

const TaskItem = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: #f4f4f4;
    border: solid 1px #dbdbdb;
    border-radius: 4px;

    padding-left: 16px;
    display: inline-flex;

    justify-content: space-between;
    align-items: center;
    color: #848484;

    transition: 0.2s linear;

    &:hover {
        background-color: #ffffff;
        transition: 0.2s ease;
    }
`;

const slideIn = keyframes`
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0);
    }
`;

const ButtonGroup = styled.div`
    display: inline-flex;
    position: relative;
    height: 100%;
    opacity: 0;
    z-index: 1;

    ${TaskItem}:hover & {
        animation: ${slideIn} 0.2s linear;
        opacity: 1;
    }
`;

const Button = styled.button`
    width: 40px;
    height: 100%;
    border: none;
    cursor: pointer;
    margin-left: auto;
    font-size: 24px;
    color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const DeleteButton = styled(Button)`
    background: #e34f4f;
`;

const AddButton = styled(Button)`
    background: #5de290;
`;

function Task({task}) {
    const {deleteTask, markCompleteTask} = useContext(TasksContext);

    return (
        <TaskItem>
            {task.title}
            <ButtonGroup>
                <DeleteButton onClick={() => deleteTask(task.id)}>
                    <AiFillMinusCircle />
                </DeleteButton>
                <AddButton onClick={() => markCompleteTask(task.id)}>
                    <AiFillCheckCircle />
                </AddButton>
            </ButtonGroup>
        </TaskItem>
    );
}

export default Task;
