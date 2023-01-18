import styled from "styled-components";


export const TaskContainer = styled.div`
width: 800px;
min-height: 560px;
position: absolute;
box-shadow: 0px 3px 6px #00000029;
border-radius: 4px;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: ${(props) => props.theme.white};
padding: 3rem;
display: flex;
flex-direction: column;
gap: 1rem;
`