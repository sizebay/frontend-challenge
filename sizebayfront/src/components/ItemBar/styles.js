import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline-flex;
  font-size: 20px;
  width: 100%;
  margin-bottom: 2rem;
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

  &:focus {
    border-color: #4DA6B3;
    background: #fff;
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

  &:hover, &:focus {
    border-color: #4DA6B3;
    background-color: #4DA6B3;
  }

  div#border {
    background: #fff;
    color: #4DA6B3;
    border: 1px solid #fff;
    border-radius: 0.75rem;
    padding: 0 0.3rem;
  }
`;
