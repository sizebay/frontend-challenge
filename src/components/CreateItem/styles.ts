import styled from 'styled-components'

import { rgba } from 'polished'

export interface ItemBarProps {
  isActive: boolean;
}

export const CreateItemContainer = styled.div`
  width: 42.5rem;
  height: 17.5rem;
`
export const ItemsListWrapper = styled.div`
  width: 42.5rem;  
  height: 17.5rem;
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

export const AddItemBarContainer = styled.div`
  width: 42.5rem;
  height: 3rem;
  margin-bottom: 1rem;

  display: flex;
`

export const ItemForm = styled.form`
  display: flex;
  width: 42.5rem;
`

export const ItemInput = styled.input<ItemBarProps>`
  width: 100%;
  padding: 0.6rem;

  font-size: 0.87rem;
  letter-spacing: 0px;

  border: 1px solid ${(props) => props.theme['gray-500']};
  border-radius: 4px 0px 0px 4px;

  color: ${(props) => props.theme['gray-600']};
  background: ${(props) => props.isActive ? props.theme.white : rgba(props.theme['gray-200'], 0.5)};
`
