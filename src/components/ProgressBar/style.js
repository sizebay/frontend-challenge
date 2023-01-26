import styled from "styled-components";

export const SProgress = styled.div`
  height: 24px;
  width: 100%;
  background-color: #E4E4E4;
  margin: 40px 0px 24px 0px;
  .bar-done{
    width:${ ({percentage}) => `${percentage}%` };
    background-color:green;
    height:100%;
    transition:.5s;
  }   
  iframe{
    width:350px;
    height:350px;
    border:none;
    position:absolute;
  } 
`
export const SConfetti = styled.img`
  position: absolute;
  pointer-events: none;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`