import styled from "styled-components";
import { device } from "../../styles";

export const ModalStyle = styled.div`
  background-color: #FFFFFF;
  border-radius: 4px;
  height: 60%;
  padding: 3rem;
  width: 40%;

  @media ${device.mobileL} {
    width: 80%;
    height:90%;
    padding: 1.5rem;
  }
`;


export const MessageContainer = styled.p`
  font-size: 14px;
`;

export const MessageLink = styled.a`
  text-decoration-line: underline;
`;
