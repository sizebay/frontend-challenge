import styled from "styled-components";
import { theme } from "../../GlobaStyles/theme";

interface TodoContainerType {
  completed: boolean
}

export const TodoContainer = styled.div<TodoContainerType>`
  position: relative;
  width: 100%;
  min-height: 48px;
  background-color: ${theme.colors.gray100};
  border: 1px solid ${theme.colors.gray200};
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  justify-content: space-between;

  ${props => props.completed && `
    opacity: 0.5;
    transition: opacity .2s ease-in-out;
    z-index: 999;
  `}
`;

export const Tooltip = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: ${theme.colors.gray100};
  border: 1px solid ${theme.colors.gray200};
  padding: .5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: .8rem;
  font-weight: bold;
  transition: opacity .2s ease-in-out;
  pointer-events: none;

  button{
    background-color: transparent;
    border: none;
    pointer-events: all;
  }
`

export const ActionButtons = styled.div`
  width: 88px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: fit-content;
  height: 100%;

  i{
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
    background-color: ${theme.colors.green500};
    pointer-events: none;
    border-radius: 0 4px 4px 0
  }
`

export const DeleteButton = styled.button`
  height: 100%;
  width: 44px;
  background-color: ${theme.colors.red500};
  border: none;
`

export const CompleteButton = styled.input`
  height: 100%;
  width: 44px;
  background-color: ${theme.colors.green500};
  border: none;
`

export const EditInput = styled.input`
  height: 44px;
  width: 100%;
  border-radius: 4px;
  border: none;
`

export const EditControls = styled.div`
  position: absolute;
  bottom: -40px;
  left: 50%;
  right: 50%;
  transform: translateX(-50%);
  width: 86px;
  height: 50px;
  display: flex;
  z-index: 10;
  clip-path: polygon(55% 15%, 100% 15%, 100% 100%, 0 100%, 0 15%, 45% 15%, 50% 0);

  button{
    padding-top: 5px;
    width: 100%;
    border: none;
    background-color: ${theme.colors.gray500};
    color: ${theme.colors.white};
    font-size: ${theme.font.size[14]};
    font-size: ${theme.font.weight.regular};
  }

`

export const TodoText = styled.p`
  width: calc(100% - 2rem);
  height: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

