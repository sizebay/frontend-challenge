import styled from 'styled-components';

export const AddingBarContainer = styled.div`
  display: inline-flex;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;
  height: 7.25vh;
`;

export const Input = styled.input`
  font-size: inherit;
  border: 1px solid #DBDBDB;
  border-radius: 0.25em 0 0 0.25em;
  padding: 0.6em 1em;
  outline: 0;
  width: 100%;
  background: #F7F7F7;
  color: #848484;
  font-size: 14px;

  &:focus {
    border-color: #4DA6B3;
    background: #fff;

    button {
      background: red !important;
    }
  }
`;

export const Button = styled.button`
  font-size: inherit;
  border: 1px solid #4DA6B3;
  border-radius: 0 0.5em 0.5em 0;
  background: #4DA6B3;
  border-left: 0;
  padding: 0.6em 0.75em;
  color: white;
  font-weight: bold;
  outline: 0;
  cursor: pointer;
`;

export const ButtonAddBorder = styled.div`
  background: #fff;
  color: #4DA6B3;
  border: 1px solid #fff;
  border-radius: 0.75rem;
  padding: 0 0.3rem;
`;
