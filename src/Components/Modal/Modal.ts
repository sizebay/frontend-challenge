import styled from "styled-components";

export const ModalContainer = styled.div`
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border-radius: 4px;
    opacity: 1;
    width: 800px;
    height: 650px;
    margin: auto;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    @media (max-width: 800px) {
        width: 90%;
    }
`