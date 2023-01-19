import styled from 'styled-components';

interface ContainerProps {
  editMode: boolean
}

export const Container = styled.div<ContainerProps>`
  display: grid;
  grid-template-columns: ${({editMode}) => editMode ? '9fr 100px' : '1fr'};
  border: 1px solid #DBDBDB;
  border-radius: 0.25rem;
  overflow: hidden;
  margin-top: 1rem;
  background-color: #F4F4F4;
  color: #848484;
  
  span, input {
    padding: 0.9rem;
    background-color: transparent;
    border: none;
    font-size: 1rem;
  }

  span {
    cursor: pointer;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  height: 100%;
`;