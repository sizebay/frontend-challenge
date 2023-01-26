import styled from "styled-components"

export const AddItemInput = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 16px;

    > form {
        width: 100%;
    }

    > form input {
        width: calc(100% - 48px);
        height: 48px;
        background-color: #F7F7F7;
        border: 1px solid #DBDBDB;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        box-sizing: border-box;
        padding: 0 16px;
        outline: none;
        color: #848484;
        font-size: 14px;
    }

    > form input::placeholder {
        opacity: .5;
    }

    > form button {
        width: 48px;
        height: 48px;
        border: 0;
        border-left: 0;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        color: #848484;
        background-color: #4DA6B3;
        opacity: .5;
        font-size: 17px;
        cursor: pointer;
    }

    > form button i {
        opacity: 1;
        color: #FFFFFF;
    }
`