import styled from "styled-components";
import { palette } from "./colors/colors";

export const Modal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: ${palette.black};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  background-color: ${palette.white};
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 4px;
  width: 800px;
  height: 650px;
  padding: 3.75rem;
`;


export const MidModal = styled.div`
  display: flex;
  justify-content: space-between;
`;


