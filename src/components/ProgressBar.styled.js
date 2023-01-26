import styled from "styled-components"

export const FillBar = styled.div`
    height: 20px;
    width: 100%;
    background-color: #E4E4E4;
    border-radius: 4px;
    margin-bottom: 24px;
`
  
export const FilledBar = styled.div`
    height: 100%;
    width: ${props => props.completed}%;
    background-color: #5DE290;
    border-radius: inherit;
`