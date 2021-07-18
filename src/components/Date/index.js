import { useState, useEffect } from 'react'

import * as S from './styles'

const Index = () => {
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')

  useEffect(() => {
    const now = new Date()
    const date = now.toString()

    setDay(date.slice(8, 10))
    setMonth(date.slice(4, 7))
    setYear(date.slice(11, 15))
  }, [])

  return (
    <S.Wrapper>
      <S.Day> {day} </S.Day>
      <S.InfoWrapper>
        <S.Month>{month}</S.Month>
        <S.Year>{year}</S.Year>
      </S.InfoWrapper>
    </S.Wrapper>
  )
}

export default Index
