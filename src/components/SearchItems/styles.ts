import { FaSearch } from 'react-icons/fa'
import styled from 'styled-components'

export const SearchContainer = styled.div`
  border-radius: 4px;
  align-items: center;
  margin-left: auto;
  position: relative;
`
export const SearchInput = styled.input`
  width: 28rem;
  height: 1rem;
  padding: 0.6rem;

  letter-spacing: 0px;
  opacity: 1;
  outline: none;

  border: 1px solid ${(props) => props.theme['gray-500']};
  border-radius: 4px;
  transition: background-color 0.3s;
  color: ${(props) => props.theme['gray-600']};
  font-size: 0.87rem;

  &:hover {
    background-color: ${(props) => props.theme.white};
  }
`

export const SearchButton = styled.button`
  width: 2.2rem;
  height: 2.2rem;
  
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;

  margin: 1px;
  border: none;
  right: 0;
  top: 0;

  cursor: pointer;
  background: ${(props) => props.theme.white};
`

export const SearchIcon = styled(FaSearch)`
  width: 1rem;
  height: 1rem;
  color: ${(props) => props.theme['gray-600']}; 
  opacity: 1;
`