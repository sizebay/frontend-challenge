import styled from 'styled-components';

export const ProgressBar = styled.div`
  height: 24px;
  width: 99.5%;
  background: #E4E4E4;
  border-radius: 4px;
  margin: 1rem 0 1rem 0;

  & > div#filler {
    background: #5DE290;
    height: 100%;
    width: 100%;
    width: ${props => props.doneTasks ? `${(props.doneTasks * 100) / props.totalItems}%` : '0%'};
    border-radius: 4px 0 0 4px;
  }
`;
