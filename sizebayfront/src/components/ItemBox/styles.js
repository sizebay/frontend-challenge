import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline-flex;
  font-size: 20px;
`;

export const Input = styled.input`
  font-size: inherit;
  border: 0.2em solid #ddd;
  border-radius: 0.5em 0 0 0.5em;
  padding: 0.2em 0.5em;
`;

export const Button = styled.button`

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
