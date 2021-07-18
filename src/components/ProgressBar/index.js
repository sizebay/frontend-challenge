import * as S from './styles'

const Index = ({ value, maxValue }) => {
  return (
    <S.Progress>
      <S.Bar value={value} maxValue={maxValue} />
    </S.Progress>
  )
}
export default Index
