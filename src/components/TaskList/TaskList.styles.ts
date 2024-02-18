import styled from 'styled-components';

export const TasksContainer = styled.div`
    max-height: 216px;
    width: 100%;
    overflow-y: auto;
    margin-top: 24px;
`;

export const NoFoundMessageContainer = styled.div`
    padding: 38px 0px;
    align-self: start;
    span{
        text-decoration: underline;
        cursor: pointer;
    }
`