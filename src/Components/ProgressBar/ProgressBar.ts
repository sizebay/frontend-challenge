import styled from 'styled-components'

export const Gif = styled.img<{ show: boolean }>`
opacity: 0;
position: absolute;
height: 250px;
right: 0;
top: -100px;

animation:  ${props => props.show ? 'fadeIn 1s' : 'fadeOut'};
animation-delay: ${props => props.show ? '1.5s' : '0s'};
animation-fill-mode: forwards;

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
}
`

export const ProgressBarContainer = styled.div`
background: #E4E4E4 0% 0% no-repeat padding-box;
border-radius: 4px;
opacity: 1;
height: 24px;
widht: 100%;
margin-bottom: 24px;
`
export const ProgressBarContainerInner = styled.div<{percentage: number}>`
background: #5DE290 0% 0% no-repeat padding-box;
border-radius: ${props => props.percentage < 100 ? '4px 0px 0px 4px' : '4px'};
width: ${props => props.percentage}%;
height: 100%;
transition: width 1.5s;
opacity: 1;
`