import * as S from './styles'

const Index = ({ className, valid, todo, text, setText }) => {
  const placeholder = todo ? todo.text : 'Add new text...'

  function handleChange({ target }) {
    setText(target.value)
  }

  return (
    <S.Input
      disabled={!valid}
      className={className}
      type="text"
      value={text}
      placeholder={placeholder}
      onChange={handleChange}
    />
  )
}

export default Index
