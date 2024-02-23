import { IconAdd, IconDelete, IconCheck, IconUncheck, ButtonDefault } from './styles'

interface DefaultButtonProps {
  onClick?: () => void;
  isCheckItem: boolean;
  isChecked?: boolean;
  isSubmit: boolean;
  isButtonActive: boolean;
  children?: React.ReactNode;
}

export function DefaultButton({ onClick, isButtonActive, isCheckItem, isChecked = false, isSubmit }: DefaultButtonProps) {
  return(
    <>
      <ButtonDefault disabled={!isButtonActive} onClick={onClick} isButtonActive={isButtonActive} isCheckItem={isCheckItem} isSubmit={isSubmit}>
        { isCheckItem && !isChecked ?
          ( <IconCheck /> ) 
        : isCheckItem ? 
        ( <IconUncheck /> )
        : isSubmit ?
         ( <IconAdd /> ) 
        : ( <IconDelete /> )
        }
      </ButtonDefault>
    </>
  )
}
