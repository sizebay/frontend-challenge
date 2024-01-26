import React from 'react';
import { IconCheck, PendingButtonContainer } from './style';
import { IconContainer } from '../DoneButton/style';

interface PendingButtonProps {
  isSelected: boolean;
  onClick: () => void;
}


function PendingButton({ isSelected, onClick }: PendingButtonProps) {
  return (
    <PendingButtonContainer isSelected={isSelected} onClick={onClick}>
      <IconContainer isSelected={isSelected}>
        <IconCheck isSelected={isSelected} />
      </IconContainer>
      Pending
    </PendingButtonContainer>
  );
}

export default PendingButton;