import styled from 'styled-components';

export const Form = styled.form`
  input {
    border: 1px solid #DBDBDB;
    border-radius: 4px;
    padding: 1rem;
    width: 92%;

    background: #F7F7F7;

    font-family: "Roboto";
    font-size: 14px;
    text-align: left;
  }

  button {
    border: 1px solid #DBDBDB;
    border-radius: 4px;

    padding: 1rem;
    width: 5%;

    background-color: #4DA6B3;
    color: #fff;

    font-size: 1rem;
  }
`;

export const Item = styled.span`
  & {
    display: block;

    font-size: 19px;

    border: 1px solid #DBDBDB;
    border-radius: 4px;

    width: 40%;

    padding: 1rem;

    background: #F4F4F4;
    color: #848484;

    margin: auto;
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
