import { IoMdRemoveCircle, IoMdCheckmarkCircle } from 'react-icons/io';
import styled from 'styled-components';

export const List = styled.ul`
  padding-left: 0;
  max-height: 226px;
  overflow-y: auto;
  border-radius: 4px;

  scrollbar-width: thin;
  scrollbar-color: #848484 #e4e4e4;

  ::-webkit-scrollbar-button {
    height: 0;
    width: 0;
  }
`;

interface StyledItemProps {
  isActive: boolean;
}

interface DeleteButtonProps {
  checked?: boolean;
}

export const IconRemove = styled(IoMdRemoveCircle)`
  font-size: 20px;
`;

export const DeleteButton = styled.button<DeleteButtonProps>`
  position: absolute;
  top: 50%;
  width: 40px;
  height: 48px;
  right: ${({ checked }) => (checked ? '40px' : '0')};
  transform: translateY(-50%);
  background-color: ${({ checked }) => (checked ? '#5DE290' : '#E34F4F')};
  color: #ffffff;
  border: none;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  border-radius: 0 4px 4px 0;

  border-radius: ${({ checked }) => (checked ? '0' : '0 4px 4px 0')};
`;


export const StyledItem = styled.li<StyledItemProps>`
  background: ${({ isActive }) => (isActive ? '#ffffff' : '#f4f4f4')} 0% 0% no-repeat padding-box;
  list-style: none;
  border: 1px solid #dbdbdb;
  height: 28px;
  display: flex;
  align-items: center;
  text-align: left;
  color: #848484;
  opacity: 1;
  padding: 10px;
  margin-bottom: 8px;
  position: relative;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s;
  border-radius: 4px;

  &:focus {
    background-color: #ffffff;
    border: 1px solid #4da6b3;
  }
`;



export const IconCheck = styled(IoMdCheckmarkCircle)`
  font-size: 20px;
`;