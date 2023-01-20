import { Container } from './styled';

interface CheckboxProps {
  text: string
  width?: 'large' | 'small'
  event?: any
  name?: string
  checkboxRef: any
}

function Checkbox({text, width, event, name, checkboxRef}: CheckboxProps) {
 
  return (
    <Container 
      checked={checkboxRef.current?.checked} width={width === 'large' ? 100 : 75}>
      <input 
        type="checkbox" 
        ref={checkboxRef} 
        onClick={() => {
          event(name, checkboxRef.current?.checked);
        }}
        name={name}
      />
      {text}
    </Container>
  );
}

export default Checkbox;