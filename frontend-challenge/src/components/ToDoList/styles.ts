import styled from 'styled-components'

export const ToDoListContainer = styled.ul`
    padding: 0;
    margin: 8px 0;
    list-style: none;
    overflow: auto;
    height: 216px;
    &::-webkit-scrollbar {
        margin-left: 10px;
        width: 8px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #848484;
        border-radius: 9px;
    }
    @media(max-width: 375px) {
        margin-top: 16px;
    }
`;

export const ClearFilterText = styled.span`
    font-size: 14px;
`
export const ClearButton = styled.span`
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;
`
export const TodoItem = styled.span`
    background-color: #F7F7F7;
    color: #848484;
    font-size: 14px;
    height: 30px;
    width: 85%;
    padding: 8px 16px;
    border: 1px solid #DBDBDB;
    border-radius: 4px 0px 0px 4px;
    border-right: none;
    outline: none;
`;

export const ButtonRemoveTodo = styled.button`
    background-color: #E34F4F;
    border: 1px solid #DBDBDB;
    border-left: none;
    border-right: none;
`;

export const ButtonDoneTodo = styled.button`
    background-color: #5DE290;
    border: 1px solid #DBDBDB;
    border-left: none;
    border-radius: 0px 4px 4px 0px;
`;
