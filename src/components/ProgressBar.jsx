import React from "react";
import styled from "styled-components";

import {useContext} from "react";
import {TasksContext} from "../contexts/Tasks";

const Parent = styled.div`
    width: 100%;
    height: 24px;
    background-color: #e0e0e0;
    border-radius: 4px;
`;

const Child = styled.div`
    width: 0%;
    height: 100%;
    background-color: #5de290;
    border-radius: 4px;
    transition: width 0.5s ease;
`;

function ProgressBar() {
    const {tasks} = useContext(TasksContext);

    const all = tasks.length;
    const done = tasks.filter((task) => task.completed == true);
    const progress = ((done.length / all) * 100).toFixed(0);
    return (
        <Parent>
            <Child style={{width: `${progress}%`}} />
        </Parent>
    );
}

export default ProgressBar;
