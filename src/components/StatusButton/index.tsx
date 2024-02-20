import { SituationButton, StatusIcon } from './styles'

interface StatusButtonProps {
  label: string;
  selected: boolean;
  done: boolean;
  onClick: () => void;
}

export function StatusButton({ label, selected, done, onClick}: StatusButtonProps) {
  return (
    <SituationButton selected={selected} onClick={onClick} done={done}>
      <StatusIcon selected={selected}/>
      {label}
    </SituationButton>
  )
}