import styled from 'styled-components';
import { theme } from '../../globalStyles/theme';

export const FilterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    width: 100%;
    height: 40px;
    gap: 4rem;
`;

export const InputContainer = styled.form`
    display: flex;
    flex: 1;
    align-items: center;
    width: 100%;
    height: 40px;
    border: 1px solid ${theme.colors.gray200};
    border-radius: 4px;
    background-color: ${theme.colors.white};
`;

export const FilterInput = styled.input`
    flex: 1;
    border: none;
    padding-left: 1rem;
    color: ${theme.colors.gray500};
    background-color: ${theme.colors.white};
    height: 100%;
    &::placeholder {
        color: ${theme.colors.gray500};
    }
`;

export const SearchButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 100%;
    border: none;
    background-color: transparent;
`

export const FilterButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    gap: 1rem;
`;

export const FilterButton = styled.button<{ active: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .5rem 1rem;
    border: 1px solid ${theme.colors.gray200};
    border-radius: 17px;
    background-color: transparent;
    color: ${theme.colors.gray500};

    ${props => props.active && `
        color: ${theme.colors.cyan500};
        border-color: ${theme.colors.cyan500};
        background-color: ${theme.colors.gray100};

        &::before{
            content: "✔";
            padding-right: .3rem;
        }
    `}
`;
