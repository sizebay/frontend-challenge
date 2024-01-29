import React from 'react';
import { StyledButton, IconContainer } from './style';

export interface ButtonStatusProps {
  isSelected: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}
  
function ButtonStatus({ isSelected, onClick, icon, label }: ButtonStatusProps) {
  return (
    <StyledButton isSelected={isSelected} onClick={onClick}>
      <IconContainer isSelected={isSelected}>
        {icon}
      </IconContainer>
      {label}
    </StyledButton>
  );
}
  
export default ButtonStatus;