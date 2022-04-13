import styled from "styled-components";

export const Container = styled.div<{ref: any , isEditing: boolean}>`
background: ${props => props.isEditing ? "#FFFFFF" : "#F4F4F4"};
border: 1px solid #DBDBDB;
opacity: 1;
border-radius: 4px;
cursor: pointer;
position: relative;
height: 48px;
display: flex;
margin: 0px 0px 8px 0px;
margin-bottom: 8px;
`