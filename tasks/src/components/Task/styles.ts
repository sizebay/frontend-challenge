import styled from "styled-components";


export const TaskContainer = styled.div`
width: 100%;
background-color: ${(props) => props.theme["white-200"]};
border: 1px solid ${(props) => props.theme.border};
height: 48px;
opacity: 1;
border-radius: 4px;
display: flex;
justify-content: space-between;

strong{
  color: ${(props) => props.theme["gray-100"]};
  padding: 0.75rem;
  font-weight: 400;
}
&:hover{
  button{
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
`

export const ButtonContainer = styled.div`
width: fit-content;
display: flex;
`

export const ButtonEdit = styled.button`
display: none;
width: 44px;
height: 48px;
opacity: 1;
background-color: ${(props) => props.theme["gray-800"]};
padding: 0.5rem;
border: 0;

svg {
    background-color: ${(props) => props.theme.white};
    border-radius: 100%;
    padding: 0.25rem;
    color:  ${(props) => props.theme["gray-800"]};
}
`

export const ButtonFinished = styled.button`
display: none;
width: 44px;
height: 48px;
border-radius: 0px 4px 4px 0px;
opacity: 1;
background-color: ${(props) => props.theme["green-500"]};
padding: 0.5rem;
border: 0;

svg {
    background-color: ${(props) => props.theme.white};
    border-radius: 100%;
    padding: 0.25rem;
    color:  ${(props) => props.theme["green-500"]};
}
`


export const ButtonDelete = styled.button`
display: none;
width: 44px;
height: 48px;
opacity: 1;
background-color: ${(props) => props.theme.red};
padding: 0.5rem;
border: 0;

svg {
    background-color: ${(props) => props.theme.white};
    border-radius: 100%;
    padding: 0.25rem;
    color:  ${(props) => props.theme.red};
}
`