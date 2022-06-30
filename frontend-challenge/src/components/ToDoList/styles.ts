import styled from 'styled-components'

export const ClearButton = styled.span`
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
