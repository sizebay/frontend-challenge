import styled from "styled-components";
import { palette } from "../../colors/colors";

export const AddInputWrapper = styled.div`
    position: relative;
    margin: 24px 0;
`

export const NewItem = styled.input`
  width: 680px;
  height: 48px;
  border: none;
  border: 1px solid ${palette.lightGrey};
  border-radius: 4px;
  color: ${palette.grey};
  font-size: 14px;
  padding: 8px;

  &:not(:focus) {
    opacity: 0.5;
    & + button {
        opacity: 0.5;
    }
  }

  &:focus {
    & + button {
        border-top: 2px solid #000000;
        border-right: 2px solid #000000;
        border-bottom: 2px solid #000000;
    }
  }
`;

export const AddButton = styled.button`
    height: 48px;
    width: 48px;
    background-color: ${palette.blue};
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0px 4px 4px 0px;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
`