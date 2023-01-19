import React from "react";
import styled from "styled-components";
import {AiOutlineCheck} from "react-icons/ai";

const Button = styled.button`
    display: inline-flex;
    gap: 6px;
    background: #ffffff;
    border: 1px solid #dbdbdb;
    border-radius: 50px;
    padding: 8px 16px;
    font-size: 14px;
    padding: 10px 16px;
    color: #848484;
    cursor: pointer;
    transition: 0.2s linear;
`;

function FilterButton({text, action, active}) {
    return (
        <Button style={active ? {backgroundColor: "#f7f7f8", border: "1px solid #4da6b3", color: "#4da6b3"} : {}} onClick={action}>
            {active && (
                <span style={{color: "#4da6b3"}}>
                    <AiOutlineCheck />
                </span>
            )}
            {text}
        </Button>
    );
}

export default FilterButton;
