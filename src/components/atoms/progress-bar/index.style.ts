import styled from "styled-components";

export const ProgressContainer = styled.div`
  position: relative;
`;

export const ProgressBar = styled.progress`
  appearance: none;
  -webkit-appearance: none;

  width: 100%;
  height: 2em;
  border-radius: inherit;

  &::-moz-progress-bar {
    background-color: #5DE290;

  }

  ::-webkit-progress-value {
    transition: width 0.5s;
  }

  &[value]::-webkit-progress-bar {
    background-color: #E4E4E4;
  }

  &[value]::-webkit-progress-value {
    background-color: #5DE290;
    transition: width 0.5s;
  }
`;

export const AnimationContainer = styled.div`
  position: absolute;
  top: -259px;
  right: -250px;
  z-index: 1;
  pointer-events: none;

  overflow: hidden;
`;