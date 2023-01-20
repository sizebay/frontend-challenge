import { ReactNode, useRef } from 'react';
import { Container, Icon, Input } from './style';

interface InputboxProps {
  text: string
  bold?: boolean
  icon?: ReactNode
  iconBg?: boolean
  iconColor?: string
  event: any
}

function Inputbox({text, icon, iconColor, iconBg, bold, event}: InputboxProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = () => {
    if (inputRef.current?.value) {
      event(inputRef.current?.value);
      inputRef.current.value = '';
    }
  };
  
  return (
    <Container>
      <Input 
        placeholder={text} 
        bold={bold} 
        ref={inputRef}
        onKeyUp={(event) => {
          if (event.key === 'Enter') {
            handleInputChange();
          }
        }}
      />
      {icon && (
        <Icon 
          iconColor={iconColor} 
          iconBg={iconBg}
          data-testid="inputbox-icon"
          onClick={handleInputChange}
          
        >
          {icon}
        </Icon>
      )}
    </Container>
  );
}

export default Inputbox;