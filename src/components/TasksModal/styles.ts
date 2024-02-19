import styled from 'styled-components'

export const Container = styled.div`
  margin: 13rem auto;
  width: 42.5rem;
  height: 30.9rem;
  padding: 3.375rem 3.75rem 6.31rem;

  display: block;

  box-shadow: 0px 0px 6px ${(props) => props.theme['gray-500']};
  border-radius: 4px;
  background: ${(props) => props.theme['white']};
`