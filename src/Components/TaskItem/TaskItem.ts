import styled from "styled-components";

export const TaskItemDescription = styled.div`
background: transparent;
flex: 1 1 0;
margin: 0px;
vertical-align: middle;
align-self: center;
padding: 15px 16px
`

export const Tooltip = styled.div`
text-align: center;
position: absolute;
top: calc(100% - 4px);
left: 50%;
transform: translateX(-50%);
visibility: hidden;
padding: 12px 19px;
border-radius: 4px;
z-index: 1;

&:before {
    content: "";
    position: absolute;
    top: -5px;
    left: 43.5%;
    transform: translateX(-50%);
    border: 5px solid transparent;
    transform: rotate(135deg);
}

${TaskItemDescription}:hover & {
    visibility: visible;
    color: #fff;
    background-color: #848484 ;

    &:before {
        border-color: transparent transparent #848484 #848484; 
    }
}
`