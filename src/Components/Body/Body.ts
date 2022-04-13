import styled from "styled-components";

export const StyledBody = styled.p<{variant: string}>`
text-align: left;
font-size: 16px;
font-weight: ${props => props.variant};
color: #848484;
opacity: 1;
`