import styled from "styled-components";

interface ButtonProps {
  active: boolean
}

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 24px;
  width: 680px;
`

export const FilterInput = styled.input`
  padding-left: 16px;
  height: 40px;
  width: 450px;
`

export const FilterBtn = styled.button<ButtonProps>`
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid ${(props) => props.active? '#4DA6B3' : '#DBDBDB'};
  border-radius: 17px;
  cursor: pointer;
  color: ${(props) => props.active? '#4DA6B3' : '#848484'};
  height: 33px;
  margin-right: 8px;
  padding: 0 19px;

`

export const Form = styled.form`
  position: relative;
  display: inline-block;
`