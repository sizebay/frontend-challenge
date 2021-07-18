import { useState } from 'react'

import * as S from './styles'

import Button from 'components/Button'
import Input from 'components/Input'

const Index = ({ disabled, hidden, setTodos }) => {
  const [text, setText] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    const todo = {
      id: new Date().getTime(),
      text: text,
      state: 'Pending'
    }
    if (text) setTodos((list) => [todo, ...list])
    setText('')
  }

  return (
    <S.Form onSubmit={handleSubmit} hidden={hidden}>
      <label htmlFor="text"></label>
      <Input
        className={disabled ? 'borderWithButton' : 'borderWithButton bg-white '}
        valid={disabled ? false : true}
        text={text}
        setText={setText}
      />
      <Button
        styleButton={disabled ? 'AddDisable' : 'Add'}
        type={disabled ? '' : 'submit'}
      />
    </S.Form>
  )
}

export default Index
