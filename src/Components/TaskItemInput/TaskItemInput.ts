import styled from "styled-components";

export const TaskInputForm = styled.form`
display: flex;
width: 100%;
`

export const Input = styled.input`
font-size: 16px;
color: #848484;
flex: 1 1 0;
border: none;
padding: 0px 16px;
background: transparent;

&:focus {
    outline: none;
}
`