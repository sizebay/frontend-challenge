import styled from "styled-components";

export const StyledHeadline = styled.h1<{size: number | undefined, variant: string}>`
margin: 0;
display:inline-block; 
text-align: left;
font-size: ${props => props.size}px;
font-weight: ${props => props.variant};
color: #848484;
opacity: 1;
`