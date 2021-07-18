import styled, { css } from 'styled-components'

const wrapperModifiers = {
  disabled: () => css`
    background: #f7f7f7 0% 0% no-repeat padding-box;
    color: #f7f7f7;
    cursor: not-allowed;
  `
}

export const Form = styled.form`
  ${({ hidden }) => css`
    width: 100%;
    height: 4.8rem;
    display: ${hidden ? 'none' : 'flex'};
  `}
`

export const Input = styled.input`
  ${({ state }) => css`
    width: 100%;
    height: 100%;
    padding: 1.6rem;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #dbdbdb;
    border-radius: 0.4rem 0 0 0.4rem;
    outline: none;
    ${!!state && wrapperModifiers.disabled};
  `}
`
