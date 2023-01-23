import styled from 'styled-components'


export const Bar = styled.div`
    background: ${(props) => props.color} 0% 0% no-repeat padding-box;
    border-radius: 4px;
    width: 100%;
`;

export const BarStatus = styled.div`
  width: ${(props) => props.progress}%;
  height: inherit;
  background-color: ${(props) => props.color};
  border-radius: inherit;
`;