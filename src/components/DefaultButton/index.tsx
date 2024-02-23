import { IconAdd, IconDelete, IconCheck, ButtonDefault } from './styles'

interface DefaultButtonProps {
  onClick?: () => void;
  isChecked: boolean;
  isSubmit: boolean;
  isButtonActive: boolean;
  children?: React.ReactNode;
}

export function DefaultButton({ onClick, isButtonActive, isChecked, isSubmit }: DefaultButtonProps) {
  return(
    <>
      <ButtonDefault disabled={!isButtonActive} onClick={onClick} isButtonActive={isButtonActive} isChecked={isChecked} isSubmit={isSubmit}>
        { isChecked ?
          ( <IconCheck /> )
        : isSubmit ?
         ( <IconAdd /> ) 
        : ( <IconDelete /> )
        }
      </ButtonDefault>
    </>
  )
}
