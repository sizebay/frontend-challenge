import styled from 'styled-components';

import { colors } from '../Header/helpers/colors';

import searchIcon from '../../assets/searchIcon.png';

export const Container = styled.section`
  display: flex;

  /* border: 2px solid red; */
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const DoneButton = styled.button`
  border: 1px solid #DBDBDB;
  border-radius: 25px;
  background: #FFF;
  padding: 0.5rem 1rem 0.5rem 1rem;
  text-align: center;
  font-size: 14px;
  color: ${colors.grey};
`;

export const PendingButton = styled(DoneButton)`
  border: 1px solid #4DA6B3;
  background: #F7F7F8;
  margin-left: 0.5rem;
  color: #4DA6B3;
  text-align: center;

  &::before {
    content: "✓\t"
  }
`;

export const Form = styled.form`
  flex-grow: 2;
  margin: auto;

  & input {
    width: 60%;
    margin-left: 4rem;
    color: #848484;

    background-image: url(${searchIcon});
    background-position: 5px 5px;
    background-repeat: no-repeat;

    height: 2rem;
    border-radius: 4px;
    border: 1px solid #DBDBDB;
    opacity: 1;
    padding-left: 12px;
  }
`;
