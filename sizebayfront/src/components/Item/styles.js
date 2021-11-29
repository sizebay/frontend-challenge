import styled from 'styled-components';

import checkImg from '../../assets/check.svg';
import minusImg from '../../assets/minus.svg';

export const Container = styled.div`
  display: flex;

  font-size: 19px;
  border: 1px solid #DBDBDB;
  border-radius: 4px;
  background: #F4F4F4;
  color: #848484;
  margin-bottom: 1rem;
  margin-right: 10px;
  opacity: 1;

  input {
    width: 100%;
    height: 100%;
    padding: 1rem;

    width: 100%;
    background: none;
    color: #848484;
    font-size: 1rem;
    border: none;

    &:focus {
      border: none;
      outline: 0;
    }
  }

  span {
    width: 100%;
    height: 100%;
    padding: 1rem;

    width: 100%;
    background: none;
    color: #848484;
    font-size: 1rem;
    border: none;
  }

  button {
    width: 10%;
    background: #BE1E2D;
    cursor: pointer;
    border: none;

    &:before {
      background-image: url(${minusImg});
    }

    & + button {
      background: #51F881;
    }
  }

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

export const ItemsArea = styled.div`
  height: 40vh;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 9px;
  }

  ::-webkit-scrollbar-track {
    background: #E4E4E4;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #848484;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555555;
  }
`;
