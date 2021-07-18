import * as S from './styles'

function clickAction(label, setFilter, setDisabled, setHidden) {
  setFilter(label)
  if (label === 'Done') {
    setHidden(true)
    setDisabled(true)
  } else {
    setHidden(false)
    setDisabled(false)
  }
}

const Index = ({ label, filter, setFilter, setDisabled, setHidden }) => {
  return (
    <S.LinkStyle
      onClick={() => clickAction(label, setFilter, setDisabled, setHidden)}
      label={label === filter ? `${label}Actived` : label}
    />
  )
}

export default Index
