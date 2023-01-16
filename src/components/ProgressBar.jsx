import React from "react";
import styled from "styled-components";

const Parent = styled.div`
    width: 100%;
    height: 24px;
    background-color: #e0e0e0;
    border-radius: 4px;
    margin-top: 20px;
    margin-bottom: 20px;
`;

const Child = styled.div`
    width: 0%;
    height: 100%;
    background-color: #5de290;
    border-radius: 4px;
    transition: width 0.5s ease;
`;

function ProgressBar({progress}) {
    return (
        <Parent>
            <Child style={{width: `${progress}%`}} />
        </Parent>
    );
}

export default ProgressBar;
