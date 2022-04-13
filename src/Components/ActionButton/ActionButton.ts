import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const ActionButtonContainer = styled.div<{variant: string, enabled: boolean}>`
background: ${props => props.variant === "delete" ? "#E34F4F" : props.variant === "save" ? "#5DE290" : "#4DA6B3" };
opacity: 1;
height: 48px;
width: 43px;
border-radius: ${props => props.variant === "delete" ? "" : "0px 4px 4px 0px"};
color: #FFFFFF;
position: relative;
opacity: ${props => props.enabled ? "1" : "0.5"};
cursor: ${props => props.enabled ? "pointer" : "not-allowed"};
`

export const Icon = styled(FontAwesomeIcon)`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
-ms-transform: translate(-50%, -50%);
weight: 24px;
height: 24px;
`