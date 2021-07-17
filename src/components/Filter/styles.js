import styled, { css } from 'styled-components'

const wrapperModifiers = {
  Done: () => css`
    width: 6.4rem;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #dbdbdb;

    color: #848484;
    &::before {
      content: 'Done';
    }
  `,
  DoneActived: () => css`
    width: 8.4rem;
    background: #f7f7f8 0% 0% no-repeat padding-box;
    border: 1px solid #4da6b3;

    color: #4da6b3;
    &::before {
      content: 'Done';
      padding-left: 1.5rem;
      background-image: url(/img/check-actived.svg);
      background-repeat: no-repeat;
      background-size: 2rem;
      background-position: -0.5rem;
    }
  `,
  Pending: () => css`
    width: 8.4rem;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #dbdbdb;

    color: #848484;
    &::before {
      content: 'Pending';
    }
  `,
  PendingActived: () => css`
    width: 10.3rem;
    background: #f7f7f8 0% 0% no-repeat padding-box;
    border: 1px solid #4da6b3;

    color: #4da6b3;
    &::before {
      content: 'Pending';
      padding-left: 2rem;
      background-image: url(/img/check-actived.svg);
      background-repeat: no-repeat;
      background-size: 2rem;
      background-position: 0rem;
    }
  `
}

export const LinkStyle = styled.button`
  ${({ label }) => css`
    height: 3.2rem;
    text-decoration: none;
    display: inline-block;
    text-align: center;
    font-size: 1.4rem;
    border-radius: 20px;
    outline: transparent;
    cursor: pointer;
    ${!!label && wrapperModifiers[label]};
  `}
`
