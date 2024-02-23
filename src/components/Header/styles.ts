import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-direction: column;
`

export const StatusFilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1.5rem 3.75rem;
  width: 100%;
`

export const DateHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const DateContainer = styled.div`
  display: flex;
  align-items: center;

  .day {
    font-weight: medium;
    font-size: 3.75rem;
    letter-spacing: 0px;
  }

  .monthAndYear {
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
  }

  .monthAndYear > .month {
    font-weight: normal;
  }

  .monthAndYear > .year {
    font-weight: 300;
  }
`

export const WeekDay = styled.div`
  font-size: 1.5rem;
`

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
  border-radius: 4px;
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

export const CancelIcon = styled(IoMdClose)`
  width: 1rem;
  height: 1rem;
  color: ${(props) => props.theme['gray-600']}; 
  opacity: 1;
`
