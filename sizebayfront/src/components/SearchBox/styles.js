import styled, { css } from 'styled-components';

import { colors } from '../Header/helpers/colors';

import searchIcon from '../../assets/searchIcon.png';

export const Container = styled.section`
  display: flex;

  margin-top: 2rem;
  margin-bottom: 2rem;

  // Mobile
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;

    nav {
      display: flex;
      width: 100%;
      margin-top: 0.85rem;
      justify-content: flex-end;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-grow: 3;
  justify-content: flex-end;

  & input {
    width: 60%;
    color: #848484;
    width: 80%;
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

export const DoneButton = styled.button`
  flex-grow: 0;

  border: 1px solid #DBDBDB;
  border-radius: 25px;
  background: #FFF;
  padding: 0.5rem 1rem 0.5rem 1rem;
  text-align: center;
  font-size: 14px;
  color: ${colors.grey};
  cursor: pointer;

  ${props => props.status && css`
    & {
      background: #F7F7F8;
      color: #4DA6B3;
      border: 1px solid #4DA6B3;
      flex-grow: 0;

      &::before {
        content: "✓\t"
      }
    }
  `}
`;

export const PendingButton = styled(DoneButton)`
  flex-grow: 0;
  margin-left: 0.5rem;
`;
