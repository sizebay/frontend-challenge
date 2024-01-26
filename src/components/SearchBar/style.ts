import { MdOutlineSearch } from 'react-icons/md';
import styled from 'styled-components';


export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const Input = styled.input`
  width: 450px;
  height: 20px;
  padding: 10px;
  letter-spacing: 0px;
  color: #848484;
  opacity: 0.5;
  outline: none;
  border: 1px solid #DBDBDB;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #F7F7F7;
  }
`;

export const ButtonSearch = styled.button`
  width: 40px;
  height: 40px;
  background: #FFFFFF;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`;

export const IconSearch = styled(MdOutlineSearch)`
  color: #848484;
  font-size: 24px;
  width: 24px;
  height: 24px;
`;