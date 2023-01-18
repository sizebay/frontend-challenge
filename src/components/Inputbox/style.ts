import styled from 'styled-components';


export const Container = styled.div`
  display: grid;
  grid-template-columns: 9fr 50px;

  color: #848484;
  font-size: 0.8rem;
  border-radius: 0.25rem;
  border: 1px solid #DBDBDB;
  overflow: hidden;
`;


interface InputProps {
  bold?: boolean
}

export const Input  = styled.input<InputProps>`
  padding: 0.6rem;
  border: none;

  color: #848484;
  font-weight: ${({bold}) => bold ? 700 : 500};
  font-size: 0.9rem;
`;

interface IconProps {
  iconBg?: boolean
  iconColor?: string
}

export const Icon = styled.button<IconProps>`
  display: flex;
  background-color: ${({iconBg}) => iconBg ? '#4DA6B3' : 'transparent'};
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: ${({iconColor}) => iconColor ? iconColor : '#848484'};
  border: none;
`;