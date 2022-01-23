import styled, { css } from 'styled-components';

export const ItemContainer = styled.div`
  display: flex;

  font-size: 19px;
  border: 1px solid #DBDBDB;
  border-radius: 4px;
  background: #F4F4F4;
  color: #848484;
  margin-bottom: 1rem;
  margin-right: 10px;

  input {
    width: 100%;
    height: 100%;
    padding: 1rem;

    width: 100%;
    background: none;
    color: #848484;
    font-size: 1rem;
    border: none;
    cursor: pointer;

    &:focus {
      border: none;
      outline: 0;
    }
  }

  ${props => props.showbuttons ? css`
  button {
    // Done button
    border: 1px solid transparent;
    border-radius: 0 0 0 0;
    background: #BE1E2D;
    border-left: 0;
    padding: 0.6em 30px;
    color: #fff;
    outline: 0;
    cursor: pointer;

    .filler {
      background: #fff;
      border-radius: 1rem;
      padding-top: 0.15rem;
    }

    // Finish button
    & + button {
      background: #51F881;
      border-radius: 0 0.2em 0.2em 0;
    }
  }
  `
  : ''};


  &:last-child {
    margin-bottom: 1rem;
  }

  &:hover {
    div {
      visibility: unset;
    }
  }

  @media screen and (max-width: 768px) {
    &:last-child {
      margin-bottom: 1rem;
    }
  }
`;
