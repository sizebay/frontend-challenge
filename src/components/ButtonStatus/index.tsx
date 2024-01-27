import React from 'react';
import { StyledButton, IconContainer } from './style';

interface ButtonStatusProps {
    isSelected: boolean;
    onClick: () => void;
    icon: React.ReactNode;
    label: string;
  }
  
  const ButtonStatus: React.FC<ButtonStatusProps> = ({ isSelected, onClick, icon, label }) => {
    return (
      <StyledButton isSelected={isSelected} onClick={onClick}>
        <IconContainer isSelected={isSelected}>
          {icon}
        </IconContainer>
        {label}
      </StyledButton>
    );
  };
  
  export default ButtonStatus;