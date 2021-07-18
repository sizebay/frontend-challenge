import { useState, useEffect } from 'react'

import { week } from 'utils/week'
import * as S from './styles'

const Index = () => {
  const [weekDay, setWeekDay] = useState('')

  useEffect(() => {
    const now = new Date()
    setWeekDay(week[now.getDay()])
  }, [])

  return <S.Wrapper>{weekDay}</S.Wrapper>
}

export default Index
