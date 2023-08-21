import styled from "styled-components";

interface ListProps {
  bgColor: boolean
  status: number
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const AddTask = styled.input`
  padding-left: 16px;
  width: 650px;
`

export const Form = styled.form`
  display: flex;
  height: 48px;
  justify-content: center;
  margin-top: 24px;
`

export const ItemText = styled.p`
  font-size: 14px;
  padding-left: 15px;
`

export const AddBtn = styled.button`
  background: #4DA6B3 0% 0% no-repeat padding-box;
  border: none;
  border-radius: 0px 4px 4px 0px;
  cursor: pointer;
  opacity: 1;
  width: 44px;
`

export const Ul = styled.ul`
  padding: 0;
`

export const Li = styled.li<ListProps>`
  background: ${props => props.bgColor? '#FFFFFF' : '#F4F4F4'} 0% 0% no-repeat padding-box;
  border: 1px solid #DBDBDB;
  border-radius: 0px 4px 4px 0px;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  list-style-type: none;
  margin-top: 8px;
  opacity: ${props => props.status};
  text-align: left;
`

export const Actions = styled.div`
  display: flex;

`

export const RemoveBtn = styled.button`
  background: #E34F4F 0% 0% no-repeat padding-box;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
  height: 48px;
  width: 44px;
`

export const CompleteBtn = styled.button`
  background: #5DE290 0% 0% no-repeat padding-box;
  border-radius: 0px 4px 4px 0px;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
  height: 48px;
  width: 44px;
`