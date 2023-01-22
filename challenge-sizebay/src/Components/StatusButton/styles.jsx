import styled from "styled-components";
import { palette } from "../../colors/colors";

export const CustomCheckbox = styled.input`
  display: none;

  & + span {
    background-color: ${palette.white};
    color: ${palette.grey};
    font-size: 14px;
    text-align: center;
    min-width: 64px;
    border: 1px solid ${(props) => props.checked ? palette.blue : palette.lightGrey};
    border-radius: 18px;
    padding: 10px 16px;
    cursor: pointer;
    position: relative;
    transition: border 0.2s ease-in;
    display: flex;
    align-items: center;
    gap: 4px;

    & > img {
      display: ${(props) => props.checked ? 'block' : 'none'};
    }
  }

`

export const Container = styled.div`
  display: flex;
  gap: 4px;
`


