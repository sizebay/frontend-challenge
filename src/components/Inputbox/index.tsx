import { ReactNode } from 'react';
import { Container, Icon, Input } from './style';

interface SearchboxProps {
  text: string
  bold?: boolean
  icon?: ReactNode
  iconBg?: boolean
  iconColor?: string
}

function Searchbox({text, icon, iconColor, iconBg, bold}: SearchboxProps) {
  return (
    <Container>
      <Input placeholder={text} bold={bold}/>
      {icon && (
        <Icon 
          iconColor={iconColor} 
          iconBg={iconBg}
          data-testid="inputbox-icon"
        >
          {icon}
        </Icon>
      )}
    </Container>
  );
}

export default Searchbox;