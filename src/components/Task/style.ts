import styled from 'styled-components';

interface ContainerProps {
  editMode: boolean
  completed: boolean
}

export const Container = styled.div<ContainerProps>`
  display: grid;
  grid-template-columns: ${({editMode}) => editMode ? '9fr 150px' : '9fr 50px'};
  border: 1px solid #DBDBDB;
  border-radius: 0.25rem;
  margin-top: 1rem;
  background-color: #F4F4F4;
  color: #848484;
  position: relative;
  opacity: ${({completed}) => completed ? '0.7' : '1'};
  
  span, input {
    padding: 0.9rem;
    background-color: transparent;
    border: none;
    font-size: 1rem;
    outline: none;

  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  height: 100%;
`;

export const EditPopover = styled.button`
  display: block;
  padding: 0.5rem 0.7rem;
  background-color: #848484;
  color: white;
  position: absolute;
  margin: auto;
  right: 0;
  left: 0;
  bottom: -30px;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    scale: 102%;
    bottom: -35px;
  }

  &::before {
    content: "";
    width: 10px;
    height: 10px;
    background-color: #848484;
    position: absolute;
    margin: auto;
    inset: 0;
    top: -100%;
    transform: rotate(45deg);
  }
`;