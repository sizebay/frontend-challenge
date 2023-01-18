import { useRef, useState } from 'react';
import { Container } from './styled';

interface CheckboxProps {
  text: string
  width?: 'large' | 'small'
}

function Checkbox({text, width}: CheckboxProps) {
  const [checked, setChecked] = useState<boolean | undefined>(false);
  const checkboxRef = useRef<HTMLInputElement>(null);

  return (
    <Container checked={checked} width={width === 'large' ? 100 : 75}>
      <input type="checkbox" ref={checkboxRef} onClick={() => {
        setChecked(checkboxRef.current?.checked);
      }}/>
      {text}
    </Container>
  );
}

export default Checkbox;