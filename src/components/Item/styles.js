import styled from 'styled-components';

import minusImg from '../../assets/minus.svg';
import checkImg from '../../assets/check.svg';

export const ItemContainer = styled.form`
  display: flex;
  border: 1px solid #DBDBDB;

  border-radius: 4px;
  background: #F4F4F4;
  color: #848484;
  margin-bottom: 1rem;
  margin-right: 10px;

  height: 3rem;

  input {
    width: 100%;
    background: none;
    color: #848484;
    font-size: 1rem;
    border: none;
    padding-left: 1rem;

    &:focus {
      outline: none;
      border: none;
    }
  }

  &:focus-within > button {
    display: inline-block;
  }

  &:focus-within > input {
    background: #fff 0% 0% no-repeat padding-box;
    border-radius: 0.4rem 0 0 0.4rem;
    position: relative;
  }
`;

export const ItemContainerNoEdit = styled.form`
  display: flex;
  border: 1px solid #DBDBDB;

  border-radius: 4px;
  background: #F4F4F4;
  color: #848484;
  margin-bottom: 1rem;
  margin-right: 10px;

  height: 3rem;

  input {
    width: 100%;
    background: none;
    color: #848484;
    font-size: 1rem;
    border: none;
    padding-left: 1rem;
    cursor: default;

    &:focus {
      outline: none;
      border: none;
    }
  }

  &:focus-within > button {
    display: inline-block;
  }

  &:focus-within > input {
    border-radius: 0.4rem 0 0 0.4rem;
    position: relative;
  }
`;

export const RemoveButton = styled.button`
  display: ${(props) => (props.show ? 'block' : 'none')};
  width: 3rem;

  cursor: pointer;
  border: transparent;
  outline: transparent;
  background: #e34f4f 0% 0% no-repeat padding-box;

  &::before {
    content: "";
    background-image: url(${minusImg});
    background-color: rgb(255, 255, 255);
    background-repeat: no-repeat;
    background-position: center;
    display: inline-block;
    width: 1.34rem;
    height: 1.34rem;
    border-radius: 50%;
  }
`;

export const DoneButton = styled.button`
  display: ${(props) => (props.show ? 'block' : 'none')};

  flex-direction: center;
  align-items: center;
  width: 3rem;

  cursor: pointer;
  border: transparent;
  outline: transparent;
  background: #5de290 0% 0% no-repeat padding-box;

  &::before {
    content: "";
    background-image: url(${checkImg});
    background-color: rgb(255, 255, 255);
    background-repeat: no-repeat;
    background-position: center;
    display: inline-block;
    width: 1.34rem;
    height: 1.34rem;
    border-radius: 50%;
  }
`;
