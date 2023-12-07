import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #555555 0% 0% no-repeat padding-box;
`;

const ModalBox = styled.div`
  background: #fff;
  width: 800px;
  height: 650px;
  padding: 60px 54px;
`;

const Modal = (props) => {
  return (
    <Overlay>
      <ModalBox>{props.children}</ModalBox>
    </Overlay>
  );
};

export default Modal;
