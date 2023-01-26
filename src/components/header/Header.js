import React from 'react'
import styled from 'styled-components'

const SHeader = styled.header`
  width: 100%;
  height:  79px;
  color: #848484;
`
const SDate = styled.div`
  display: flex;
  align-items: center;
  p{
    margin: 0px 5px 0px 0px;
    font-size: 4rem;
    font-weight: 600;
  }
  span{
    font-size: 1.5rem;
    font-weight: 300;
  }
`

const SDateDay = styled.span`
  display: flex;
  width: 100%;
  justify-content: right;
`

export const Header = () => {

  var Xmas95 = new Date();
  var weekday = Xmas95.getDay();
  console.log(weekday);
  switch (weekday){
    case 0:
       weekday = 'Domingo';
      break;
    case 1:
       weekday = 'Segunda-feira';
      break;
    case 2:
       weekday = 'Terça-feira';
      break;
    case 3:
       weekday = 'Quarta-feira';
      break;
    case 4:
       weekday = 'Quinta';
      break;
    case 5:
       weekday = 'Sexta';
      break;
    case 6:
       weekday = 'Sábado';
      break;
  default:
       weekday = 'Indefinido';
      break;
  }

  return (
    <SHeader>
      <SDate>
        <p>{new Date().toLocaleString("en-US", { day : '2-digit'})}</p>
        <span>{new Date().toLocaleString("en-US", { month: "long" })}<br/> {new Date().getFullYear()}</span>
        <SDateDay> <br/> {weekday} </SDateDay>
      </SDate>
    </SHeader>
  )
}
