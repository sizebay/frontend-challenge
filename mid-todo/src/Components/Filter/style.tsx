import styled from "styled-components";

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

export const FilterBtn = styled.button<{isActive: boolean}>`
  background: ${props => props.isActive? '#FFFFFF' : '#F7F7F8'} 0% 0% no-repeat padding-box;
  border: 1px solid ${props => props.isActive? '#4DA6B3' : '#DBDBDB'};
  border-radius: 17px;
  cursor: pointer;
  color: ${props => props.isActive? '#4DA6B3' : 'black'};
  height: 33px;
  margin-right: 8px;
  padding: 0 19px;

`

export const Form = styled.form`
  position: relative;
  display: inline-block;
`