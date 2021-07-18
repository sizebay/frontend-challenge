import styled, { css } from 'styled-components'

export const Input = styled.input`
  ${({ disabled }) => css`
    width: 100%;
    height: 4.8rem;

    background: #f4f4f4 0% 0% no-repeat padding-box;
    border: 1px solid #dbdbdb;
    border-radius: 0.4rem;

    text-align: left;
    font-size: 1.4rem;
    color: #848484;

    padding: 1.6rem;

    outline: none;

    cursor: ${disabled ? 'not-allowed' : 'auto'};

    &.bg-white {
      background: #fff;
    }

    &.borderWithButton {
      border-radius: 0.4rem 0 0 0.4rem;
    }
  `}
`
