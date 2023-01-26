import React from 'react'
import {SHeader, SDate, SDateDay} from './style.js'

export const Header = () => {
  var weekday = new Date().toLocaleString("en-US", { weekday: "long" }).toUpperCase;
 
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
