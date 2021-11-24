import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 19px;
  border: 1px solid #DBDBDB;
  border-radius: 4px;
  background: #F4F4F4;
  color: #848484;
  margin-bottom: 1rem;
  margin-right: 10px;
  opacity: 1;

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

export const ContentArea = styled.div`
  display: flex;
  flex-grow: 2;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;

  input {
    border: none;
    background: none;
    cursor: default;
    color: #848484;

    &:focus {
      border: none;
      outline: 0;
    }
  }
`;

export const ButtonArea = styled.div`
  flex-grow: 0;
  visibility: hidden;

  button {
    border: none;
    background: #FFF;
    padding: 0.5rem 1rem 0.5rem 1rem;
    text-align: center;
    font-size: 14px;
    cursor: pointer;
    height: 100%;

    .border {
      background: #fff;
      border: 1px solid #fff;
      border-radius: 0.75rem;
      padding: 0 0.3rem;
    }
  }

  #removeButton {
    background: #BE1E2D;
    color: #BE1E2D;
  }

  #doneButton {
    background: #51F881;
    color: #51F881;
    font-size: 11px;
    border-radius: 0 3px 3px 0;
  }
`;
