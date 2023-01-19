import styled from "styled-components";


export const SearchContainer = styled.form`
width: 100%;
height: 40px;
padding: 1rem;
display: flex;
justify-content: space-between;
align-items: center;
border-radius: 4px;
opacity: 1;
border: 1px solid ${(props) => props.theme.border};

input {
  width: 100%;
  height: 30px;
  color: ${(props) => props.theme["gray-100"]};
  border: 0;
  &::placeholder{
    color: ${(props) => props.theme["gray-100"]};
  }
}

svg{
  color: ${(props) => props.theme["gray-100"]};
}

button{
  border: 0;
  background-color: transparent;
}
`