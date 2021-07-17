import styled from 'styled-components'

export const Form = styled.form`
  width: 100%;
  height: 4.8rem;
  display: flex;

  & > button {
    display: none;
  }

  &:focus-within > button {
    display: inline-block;
  }

  &:focus-within > input {
    background: #fff 0% 0% no-repeat padding-box;
    border-radius: 0.4rem 0 0 0.4rem;
    position: relative;
  }
`
