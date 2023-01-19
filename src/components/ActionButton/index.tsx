import { Container } from './style';
import { ReactNode } from 'react';

interface ActionButtonProps {
  icon: ReactNode
  bg?: string
  color?: string
}


function ActionButton({icon, bg, color}: ActionButtonProps) {
  return (
    <Container bg={bg} color={color} data-testid="action-button">
      {icon}
    </Container>
  );
}

export default ActionButton;