import { SituationButton, StatusIcon } from './styles'

interface StatusButtonProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

export function StatusButton({ label, selected, onClick}: StatusButtonProps) {
  return (
    <SituationButton selected={selected} onClick={onClick}>
      <StatusIcon selected={selected}/>
      {label}
    </SituationButton>
  )
}