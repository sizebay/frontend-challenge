import styled from "styled-components";

export const STask = styled.div`
  margin: 24px 0px 0px 0px;
  height: 48px;
  width: 100%;
  background-color: #F4F4F4;
  border: 1px solid #DBDBDB;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px;
  cursor: pointer;
  span{
    text-align: start;
    letter-spacing: 0px;
    font-size: 1rem;
    color: #848484;
    margin: 0px 0px 0px 16px;
    font-weight: 400;
  }
  img{
    height: 20px;
    width: 20px;
  }
  button{
    height: 100%;
    width: 44px;
    background-color: #E34F4F;
    border: none ;
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 0px;
    cursor: pointer;
  }
  button:last-child{
    background-color: #5DE290;
    align-items: center;
    display: flex;
    justify-content: center;
    border-radius: 0px 4px 4px 0px;
    &:hover{
      background-color: #5DE290;
    }
  }
  &.selected{
    background-color: white;
  }
`
export const SButtons = styled.div`
  display: flex;
  height: 100%;
  margin: 0px;
  padding: 0px;
`