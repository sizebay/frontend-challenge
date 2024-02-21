import styled from 'styled-components';
import defaultTheme from '../../styles/themes/default';

export const NewTaskContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;

    input {
        width: 100%;
        border: 1px solid ${defaultTheme.gray[400]};
        border-radius: 4px 0px 0px 4px;
        padding-left: 16.29px;
        height: 48px;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    height: 48px;    
    width: 100%;
    input::placeholder {
        opacity: 0.5;
    }
`;