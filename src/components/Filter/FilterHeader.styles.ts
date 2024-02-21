import styled from 'styled-components';
import defaultTheme from '../../styles/themes/default';

export const FilterHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 27px 0px 24px 0px;
    width: 100%;

    @media (max-width: 768px) {
    padding: 24px 0px 16px 0px;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 8px;
    justify-content: flex-end; 
    @media (max-width: 768px) {
        align-self: flex-end;
        padding-top: 11px;
    }
`;

export const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }
`;

export const InputContainer = styled.div`
    position: relative;
    width: 100%; 
`;

export const Input = styled.input`
    flex-grow: 1;
    height: 40px;
    border: 1px solid ${defaultTheme.gray[400]};
    border-radius: 4px;
    padding-left: 16.29px;
    width: 100%;
    max-width: 450px;
    float: inline-end;
    @media (max-width: 768px) {
        max-width: 100%;
        margin-right: 0;
    }
`;
