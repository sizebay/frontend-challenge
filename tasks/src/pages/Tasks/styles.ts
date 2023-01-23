import styled from "styled-components";


export const TaskContainer = styled.div`
width: 800px;
height: 560px;
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

@media (max-width: 768px){
    width: 95%;
    padding: 3rem 1rem;
}
`

export const TasksContainer = styled.div`
width: 100%;
height: 350px;
display: flex;
flex-direction: column;
gap: 1rem;
overflow-y: auto;
`

export const GridContainer = styled.div`
width: 100%;
display: grid;
grid-template-columns: 0.35fr 1fr;
gap: 3rem;

@media (max-width: 768px){
    grid-template-columns: 1fr;
    gap: 0;
    position: relative;
    height: 200px;
}
`