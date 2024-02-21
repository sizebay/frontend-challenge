import styled, { css } from 'styled-components';
import defaultTheme from '../../../styles/themes/default';

const baseStyles = css`
    display: flex;
    background: ${defaultTheme.gray[150]};
    border: 1px solid ${defaultTheme.gray[400]};
    border-radius: 4px;
    height: 48px;
    margin-bottom: 8px;
    font-weight: 400;
    align-items: center;
    justify-content: space-between;
    overflow-y: hidden;
`;

export const TaskItemContainer = styled.div`
    ${baseStyles};
`;

export const TaskItemContainerEdit = styled.div`
    ${baseStyles};
    background: ${defaultTheme.white}; 
`;

export const ItemText = styled.div`
    padding-left: 16px;
`;

export const ButtonContainer = styled.div`
    display: flex;
`;

export const Input = styled.input`
    border: none;
    padding-left: 16px;
    width: 70%;
`;