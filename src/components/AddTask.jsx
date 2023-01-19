import {useContext, useState} from "react";
import {TasksContext} from "../contexts/Tasks";

import styled from "styled-components";

import {MdAddCircle} from "react-icons/md";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Input = styled.input`
    border: solid 1px #e0e0e0;
    outline: none;
    font-size: 14px;
    padding: 8px 16px;
    width: 100%;
    height: 50px;
    border-radius: 4px 0px 0px 4px;
`;

const Button = styled.button`
    background-color: #4da6b3;
    border-radius: 0px 4px 4px 0px;
    height: 50px;
    width: 45px;
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.8;

    &:hover {
        opacity: 1;
    }
`;

const Add = styled(MdAddCircle)`
    color: #ffffff;
    font-size: 20px;
`;

function AddTask() {
    const {createTask} = useContext(TasksContext);
    const [input, setInput] = useState("");

    function handleAddTask() {
        if (input === "") {
            return;
        }
        createTask(input);
        setInput("");
    }

    return (
        <Container>
            <Input placeholder="Add a new item..." value={input} onChange={(e) => setInput(e.target.value)} />
            <Button onClick={handleAddTask}>
                <Add />
            </Button>
        </Container>
    );
}

export default AddTask;
