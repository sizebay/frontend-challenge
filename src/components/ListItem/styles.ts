import styled from "styled-components";

export const Wrapper = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f4f4f4;
  border-radius: 4px;
  border: 1px solid var(--secundary-gray);
  .description-container {
    padding: 11px 9px 10px 9px;
    max-width: 75%;
    > input {
      border: none;
      background-color: transparent;
      font-size: 14px;
      color: var(--primary-gray);
      font-weight: 400;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    > .subtitle {
      opacity: 0;
      transition: 0.4s;
      padding: 10px 16px;
      background: var(--primary-gray);
      position: absolute;
      left: 100px;
      border-radius: 4px;
      color: #ffffff;
      pointer-events: none;
      font-size: 14px;
      &::before {
        content: "";
        position: absolute;
        left: 40%;
        top: -5px;
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid var(--primary-gray);
      }
    }
  }
  &:hover .subtitle {
    opacity: 0.8;
  }
  > .buttons-container {
    opacity: 0;
    display: flex;
    transition: 0.4s;
    height: 100%;
    > button {
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      font-size: 20px;
      padding: 0 5px;
      color: #ffffff;
      cursor: pointer;
      transition: 0.4s;
      > svg {
        transition: 0.4s;
      }
      &:hover {
        filter: brightness(1.2);
      }
      &:hover > svg {
        transform: scale(1.1);
      }
    }
    > .remove-task-btn {
      background-color: var(--main-red);
    }
    > .complete-task-btn {
      background-color: var(--primary-color);
    }
  }
  :hover > div {
    opacity: 1;
  }
`;
