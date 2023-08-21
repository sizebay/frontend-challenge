import styled from "styled-components";

interface ProgressInterface {
  value: number,
  shouldShow: string;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
`

export const Bar = styled.div`
  background: #E4E4E4 0% 0% no-repeat padding-box;
  border-radius: 4px;
  height: 24px;
  opacity: 1;
  width: 680px;

`
//I've tried to use .process since we have on html5,
//but I could not change the color, at least in my browser.
export const Progress = styled.div<ProgressInterface>`
  display: ${props => props.shouldShow};
  background-color: #5DE290;
  border-radius: inherit;
  width: ${({ value }) => `${value}%`};
  height: inherit; 
`

export const ConfettiPosition = styled.div`
  display: flex;
  justify-content: end;
`