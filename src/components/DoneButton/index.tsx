import React from 'react';
import { DoneButtonContainer, IconCheck, IconContainer } from './style';

interface DoneButtonProps {
  isSelected: boolean;
  onClick: () => void;
}

function DoneButton({ isSelected, onClick, ...rest }: DoneButtonProps) {
  return (
    <DoneButtonContainer {...rest} isSelected={isSelected} onClick={onClick}>
      <IconContainer isSelected={isSelected}>
        <IconCheck isSelected={isSelected} />
      </IconContainer>
      Done
    </DoneButtonContainer>
  );
}

export default DoneButton;