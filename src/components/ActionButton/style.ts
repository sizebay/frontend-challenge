import styled from 'styled-components';

interface ContainerProps {
  bg?: string
  color?: string
}

export const Container = styled.button<ContainerProps>`
  display: flex;
  width: 50px;
  height: 100%;
  background-color: ${({bg}) => bg ? bg : 'transparent'};
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: ${({color}) => color ? color : '#848484'};
  border: none;
`;