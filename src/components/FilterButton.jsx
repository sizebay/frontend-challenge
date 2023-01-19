import React from "react";
import styled from "styled-components";

const Button = styled.button`
    background: #ffffff;
    border: 1px solid #dbdbdb;
    border-radius: 50px;
    padding: 8px 16px;
    font-size: 14px;
    padding: 10px 16px;
    color: #848484;
    cursor: pointer;
`;

function FilterButton({text, action, active}) {
    return (
        <Button style={active ? {backgroundColor: "#f7f7f8", border: "1px solid #4da6b3", color: "#4da6b3"} : {}} onClick={action}>
            {text}
        </Button>
    );
}

export default FilterButton;
