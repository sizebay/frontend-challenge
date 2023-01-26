import styled from "styled-components";

export const SMarkers = styled.div`
  display: flex;
  align-self: center;
  justify-content: start;
  width: 155px;
  height: 33px;
  img{
    height:15px;
    width:15px;
    margin: 0px 5px 0px 0px;
    fill: #4DA6B3;
  }
  ul{
    display: contents;
    @media screen and (max-width: 391px) and (max-height:900px) {
      justify-content: right;
      display: flex;
      width: 100%;
  }
    list-style: none;
    align-items: center;
    button{
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
      font-weight: 400;
      font-family: 'Roboto', sans-serif;
      margin: 0px 8px 0px 0px;
      padding: 7px 16px;
      border: 1px solid #DBDBDB;
      background-color: transparent;
      border-radius: 33px;
      color: #848484;
      &:hover{
        cursor: pointer;
        background-color: #F7F7F8;
        border-color: #4DA6B3;
      }
    }
  }
  .selected{
      border:1px solid #4DA6B3;
      color: #4DA6B3;
  }
  @media screen and (max-width: 391px) and (max-height:900px) {
    width: 100%;
    margin: 16px 10px;
  }
`
export const SSearchBox = styled.div`
  display: flex;
  align-items: center;
  width: 450px !important;
  height: 40px;
  border: 1px solid #DBDBDB;
  border-radius: 4px;
  &:hover{
  border: 1px solid #BBBBBB;
  }
  input{
    font-family: 'Roboto', sans-serif;
    color: #848484;
    font-size: 1rem;
    font-weight: 400;
    height: 40px;
    width: 100%;
    margin: 0px;
    padding: 0px 0px 0px 16px;
    border-radius: 4px 0px 0px 4px;
    border: none;
    &::placeholder{
      color: #848484;
    }
    &:focus{
      outline: none;
    }
  }
  img{
    width: 17px;
    height: 17px;
    color: red;
    margin: 0px 13px 0px 0px;
  }
  .cancelSearch:hover{
    cursor: pointer;
  }
  
  `
export const SSearchTask = styled.div`
    flex-wrap: wrap-reverse;
    display:flex;
    justify-content:space-between;
`