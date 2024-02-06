import styled from "styled-components";

export const ProgressFiller = styled.div`
  height: 100%;
  width: ${(props) => props.theme.completed}%;
  background-color: #5DE290;
  border-radius: ${(props) => props.theme.completed === 100 ? "inherit" : "4px 0px 0px 4px"};
  textAlign: right;
  min-height: 24px;
`;

export const ProgressContainer = styled.div`
  width: 100%;
  background-color: #E4E4E4;
  border-radius: 4px;
`;