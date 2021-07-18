import styled, { css } from 'styled-components'

export const Form = styled.form`
  width: 100%;
  height: 4.2rem;
  position: relative;
  display: block;
`
export const Input = styled.input`
  width: 100%;
  height: 100%;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  outline: none;

  text-align: left;
  font-size: 1.4rem;
  letter-spacing: 0px;
  color: #848484;
  padding: 1rem 1.6rem;
`

export const Button = styled.button`
  ${({ icon }) => css`
    width: 3rem;
    height: 3rem;
    border: none;
    outline: none;
    background-color: transparent;
    background-image: url(/img/${icon}.svg);
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    top: 0.5rem;
    right: 1rem;
  `}
`
