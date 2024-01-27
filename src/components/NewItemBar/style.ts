import { IoMdAddCircle } from "react-icons/io";
import styled from "styled-components";

export const NewItemBarContainer = styled.div`
  display: flex;
  background: #F7F7F7 0% 0% no-repeat padding-box;
  border-radius: 4px;
  margin: 24px 0;
`;

export const StyledForm = styled.form`
  display: flex;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid #DBDBDB;
  border-radius: 4px 0 0 4px;
  padding: 10px;
  color: #848484;
  opacity: 0.5;
  font-size: 14px;
  outline: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #F7F7F7;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const SearchButton = styled.button`
  background-color: #4DA6B3;
  color: #FFFFFF;
  border: none;
  border-radius: 0 4px 4px 0;
  padding: 10px;
  cursor: pointer;
`;

export const IconAdd = styled(IoMdAddCircle)`
  font-size: 20px;
`;
