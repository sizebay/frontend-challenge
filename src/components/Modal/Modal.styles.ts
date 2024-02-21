import styled from 'styled-components';

export const ModalContent = styled.div`
    background: ${props => props.theme.gray["100"]};
    width: 800px;
    height: 650px;
    box-shadow: 0px 3px 6px ${props => props.theme.gray["500"]};
    border-radius: 4px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0px 60px 60px 60px;

    @media (max-width: 768px) {
        width: calc(100vw - 32px);
        height: calc(100vh - 32px);
        padding: 16px;
    }
`
