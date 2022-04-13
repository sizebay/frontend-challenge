import styled from "styled-components";

export const FilterTabContainer = styled.div<{ justify: string }>`
margin-bottom: 24px;
display: flex;
justify-content: ${props => props.justify};

@media (max-width: 720px) {
    flex-direction: column-reverse;
    gap: 10px;
    align-items: flex-end
}
`

export const ButtonWrapper = styled.div<{ show: boolean }>`
diplay: flex;
visibility: ${props => props.show ? 'visible' : 'hidden'};
align-items: center;

& > :first-child {
    margin-right: 10px;
}
`