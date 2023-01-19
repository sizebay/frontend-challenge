import { Container } from './style';
import { ReactNode } from 'react';

interface ActionButtonProps {
  icon: ReactNode
  bg?: string
  color?: string
  event?: () => void
}


function ActionButton({icon, bg, color, event}: ActionButtonProps) {
  return (
    <Container 
      onClick={event}
      bg={bg} 
      color={color} 
      data-testid="action-button"
    >
      {icon}
    </Container>
  );
}

export default ActionButton;