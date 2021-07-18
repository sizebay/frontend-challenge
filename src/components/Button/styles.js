import styled, { css } from 'styled-components'

const wrapperModifiers = {
  Check: () => css`
    background: #5de290 0% 0% no-repeat padding-box;
    border-radius: 0px 4px 4px 0px;
    &::before {
      content: '';
      margin-top: 0.5rem;
      background-image: url(/img/check.svg);
      display: inline-block;
      background-color: #fff;
      width: 2.34rem;
      height: 2.34rem;
      border-radius: 50%;
    }
  `,
  Add: () => css`
    background: #4da6b3 0% 0% no-repeat padding-box;
    border-radius: 0px 4px 4px 0px;
    &::before {
      content: '';
      margin-top: 0.5rem;
      background-image: url(/img/plus.svg);
      display: inline-block;
      background-color: #fff;
      width: 2.34rem;
      height: 2.34rem;
      border-radius: 50%;
    }
  `,
  Remove: () => css`
    background: #e34f4f 0% 0% no-repeat padding-box;
    &::before {
      content: '';
      margin-top: 0.5rem;
      background-image: url(/img/minus.svg);
      background-color: #fff;
      display: inline-block;
      width: 2.34rem;
      height: 2.34rem;
      border-radius: 50%;
    }
  `,
  AddDisable: () => css`
    background: #a2ced6 0% 0% no-repeat padding-box;
    border-radius: 0px 4px 4px 0px;
    cursor: not-allowed;
    &::before {
      content: '';
      margin-top: 0.5rem;
      background-image: url(/img/plus-disable.svg);
      display: inline-block;
      background-color: #d1e7eb;
      width: 2.34rem;
      height: 2.34rem;
      border-radius: 50%;
    }
  `
}

export const Button = styled.button`
  ${({ styles }) => css`
    cursor: pointer;

    width: 4.3rem;
    height: 4.8rem;

    border: transparent;
    outline: transparent;

    ${!!styles && wrapperModifiers[styles]};
  `}
`
