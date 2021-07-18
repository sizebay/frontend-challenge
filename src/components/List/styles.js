import styled from 'styled-components'

export const List = styled.ul`
  width: 100%;
  height: 21.6rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  padding-right: 0.4rem;

  &::-webkit-scrollbar {
    width: 0.8rem;
  }
  & {
    scrollbar-width: thin;
    scrollbar-color: #90a4ae #cfd8dc;
  }
  &::-webkit-scrollbar-track {
    background: #e4e4e4;
    border-radius: 0.9rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #848484;
    border-radius: 0.9rem;

    padding: 8rem;
  }
`
