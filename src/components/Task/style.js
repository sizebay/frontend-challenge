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

  .taskEditable{
    position:relative;
    text-align: start;
    letter-spacing: 0px;
    font-size: 1rem;
    color: #848484;
    margin: 0px 0px 0px 0px;
    padding-left: 16px;
    font-weight: 400;
    height:100%;   
    width:100%;
  }

  .taskEditable input{
    height:100%;    
    margin: 0px;
    padding: 0px;
    border: none;
    outline: none;
    background-color: transparent;
    width:100%;
    color: #848484;
    font-size: 1rem;
    text-transform: capitalize;
    font-family: 'Roboto', sans-serif ;
    font-weight: 400 ;
  }

  .taskEditable input:focus{
    outline:none;
    border: none;
    outline: none;
  }

  .taskEditable span{
    display:none;
    position:absolute;
    z-index:5;
    left:50%;
    bottom:0;
    transform:translateX(-50%) translateY(100%);
    font-family: 'Roboto', sans-serif ;
    font-weight: 400;
    font-size: 0.85rem;
  }

  .taskEditable span::before{
    content:'';
    display:block;
    margin:auto;
    width:10px;
    height:10px;
    margin-bottom:-6px;
    background-color:#848484;
    transform:rotateZ(135deg);
  }

  .taskEditable span::after{
    content:'Edit Task';
    color:#fff;
    display:block;
    background-color:#848484;
    transition:.25s;
    padding:0.7rem;
  }

  .taskEditable input:not(.editable):hover + span{
    display:block;
  }
`
export const SButtons = styled.div`
  display: flex;
  height: 100%;
  margin: 0px;
  padding: 0px;
`