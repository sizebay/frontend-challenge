import * as S from './styles'

const Index = ({ type, onClick, styleButton }) => {
  return (
    <S.Button type={type} onClick={onClick} styles={styleButton}></S.Button>
  )
}

export default Index
