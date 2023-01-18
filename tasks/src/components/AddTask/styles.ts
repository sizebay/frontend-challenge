import styled from "styled-components";


export const AddTaskContainer = styled.form`
width: 100%;
display: flex;
align-items: center;
height: 48px;
border-radius: 4px;
opacity: 1;
border: 1px solid ${(props) => props.theme.border};

input {
  width: 100%;
  height: 30px;
  color: ${(props) => props.theme["gray-100"]};
  font-weight: 400;
  padding: 1rem;
  border: 0;
  &::placeholder{
    color: ${(props) => props.theme["gray-100"]};
  }
}

button{
  width: 44px;
  height: 48px;
  padding: 0.75rem;
  background-color: ${(props) => props.theme["green-100"]};
  border-radius: 0px 4px 4px 0px;
  border: 0;

  svg{
    background-color: ${(props) => props.theme.white};
    border-radius: 100%;
    padding: 0.25rem;
    color:  ${(props) => props.theme["green-100"]};
  }
}
`