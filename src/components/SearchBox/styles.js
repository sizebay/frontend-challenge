import styled from 'styled-components';

import searchIcon from '../../assets/searchIcon.png';

export const Container = styled.section`
  flex-grow: 3;
`;

export const Form = styled.div`
  display: flex;
  flex-grow: 3;
  justify-content: flex-end;

  & input {
    width: 60%;
    color: #848484;
    width: 100%;
    height: 100%;
    background-image: url(${searchIcon});
    background-position: right;
    background-size: 2rem;
    background-repeat: no-repeat;
    height: 2rem;
    border-radius: 4px;
    border: 1px solid #DBDBDB;
    opacity: 1;
    padding-left: 12px;
    outline: 0;

    &:hover, &:focus {
      border-color: #a8a8a8;
    }
  }

  // Mobile
  @media (max-width: 768px) {
    width: 100%;

    input {
      width: 100%;
      padding: 0.6rem;
    }
  }
`;
