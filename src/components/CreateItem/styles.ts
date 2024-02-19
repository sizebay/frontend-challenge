import styled from 'styled-components'

export const CreateItemContainer = styled.div`
  width: 42.5rem;
  height: 17.5rem;
`
export const ItemsListWrapper = styled.div`
  width: 42.5rem;  
  height: 13.5rem;
  padding-right: 1rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  overflow-y: auto;
  overflow-x: hidden;

  scrollbar-width: thin;
  scrollbar-color: ${(props) => props.theme['gray-600']};

  ::-webkit-scrollbar {
    width: 0.5em;
    border-radius: 9px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme['gray-400']};
    border-radius: 9px;
  }

  ::-webkit-scrollbar-button {
    height: 0;
    width: 0;
  }
`
