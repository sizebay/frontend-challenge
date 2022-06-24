import styled from 'styled-components';
import { theme } from '../../GlobaStyles/theme';

interface LabelTypes {
    selected: boolean
}

export const FilterTodosContainer = styled.div`
  display: flex;
  gap: 3.3rem;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  @media(max-width: 800px) {
    flex-direction: column-reverse;
    gap: .9rem;
    margin-bottom: 1rem;
  }
`;

export const FilterButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;


`

export const TagButton = styled.button<LabelTypes>`
    position: relative;
    border: 1px solid ${theme.colors.gray200};
    padding: .5rem 1rem;
    border-radius: 300px;
    transition: all 0.2s ease-in-out;

    ${props => props.selected && `
        border: 1px solid ${theme.colors.cyan500};
        color ${theme.colors.cyan500};
        background-color: ${theme.colors.gray100};
        ::before{
            content: "✓";

    `}

`
export const FilterInputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${theme.colors.gray200};
    width: 100%;
`

export const FilterInput = styled.input`
    width: 100%;
    height: 40px;
    outline: none;
    padding-left: 1rem;
    border: none;
`

