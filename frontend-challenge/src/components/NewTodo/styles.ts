import styled from 'styled-components'

export const NewTodoContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const NewTodoInput = styled.input`
    background-color: #F7F7F7;
    color: #848484;
    font-size: 14px;
    height: 33px;
    width: 95%;
    padding: 8px 16px;
    border: 1px solid #DBDBDB;
    border-radius: 4px 0px 0px 4px;
    border-right: none;
    outline: none;
    ::placeholder {
        font-size: 14px;
        opacity: 0.5;
    }
`;

export const ButtonAddTodo = styled.button`
    background-color: #4DA6B3;
    font-size: 24px;
    padding: 13px 10px 8px;
    border: 1px solid #DBDBDB;
    border-radius: 0px 4px 4px 0px;
    border-left: none;
    outline: none;
    opacity: 0.5;
    svg {
        color: #FFFFFF;
    }
`;
