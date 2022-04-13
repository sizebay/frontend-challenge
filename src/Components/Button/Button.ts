import styled from 'styled-components'

export const StyledButton = styled.button<{isActive: boolean}>`
background: ${props => props.isActive ? "#F7F7F8" : "#FFFFFF"} 0% 0%  no-repeat padding-box; 
border: 1px solid ${props => props.isActive ? "#4DA6B3" : "#DBDBDB"};
color: ${props => props.isActive ? "#4DA6B3" : "#848484"};
border-radius: 17px;
opacity: 1;
text-align: center;
padding: 8px 16px;
cursor: pointer;
`

export const Icon = styled.div`
display: inline-block;
margin-right: 6px;
`