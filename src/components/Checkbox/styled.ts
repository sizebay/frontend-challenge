import styled from 'styled-components';

interface ContainerProps {
  checked?: boolean
  width?: number
}

export const Container = styled.label<ContainerProps>`
  width: ${({width}) => `${width}px`};
  display: inline-flex;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 1rem;
  border: 1px solid ${({checked}) => !checked ? '#848484' : '#4DA6B3'};
  font-family: "Roboto", sans-serif;
  background-color: ${({checked}) => checked ? '#F7F7F8' : '#fff'};
  color: ${({checked}) => !checked ? '#848484' : '#4DA6B3'};
  transition: all 0.2s;
  cursor: pointer;

  input {
    appearance: none;
    margin-right: 0.2rem;

    &:checked::after {
      content: "✓";
      font-size: 1.3rem;
      color: #4DA6B3;
      line-height: 1rem;
    }
  }
`;