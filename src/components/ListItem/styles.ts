import styled from "styled-components";

export const Wrapper = styled.li`
  width: 100%;
  max-width: 680px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f4f4f4;
  border-radius: 4px;
  border: 1px solid var(--secundary-gray);
  transition: 0.4s;
  .description-container {
    padding: 11px 9px 10px 9px;
    width: 130%;
    > input {
      border: none;
      background-color: transparent;
      font-size: 14px;
      color: var(--primary-gray);
      font-weight: 400;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 130%;
      letter-spacing: -0.3px;
      @media (min-width: 650px) {
        width: 100%;
      }
    }
  }
  .tooltip {
    position: relative;
    display: inline-block;
    right: 60%;
    > span {
      opacity: 0.8;
      visibility: hidden;
      background-color: var(--primary-gray);
      color: #fff;
      text-align: center;
      padding: 5px 20px 5px 0;
      font-size: 14px;
      border-radius: 4px;
      position: absolute;
      z-index: 1;
      white-space: nowrap;
      pointer-events: none;
      top: 17px;
      &::before {
        content: "";
        width: 0;
        height: 0;
        position: relative;
        bottom: 30px;
        left: 50%;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid var(--primary-gray);
      }
    }
  }
  :hover .tooltip > span {
    visibility: visible;
  }
  :hover {
    background-color: #ffffff;
  }
  > .buttons-container {
    opacity: 0;
    display: flex;
    transition: 0.4s;
    height: 100%;
    pointer-events: none;
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
  :hover > .buttons-container {
    opacity: 1;
    pointer-events: auto;
  }
  @media (min-width: 650px) {
    height: 48px;
    .description-container {
      padding: 15px 0px 14px 16px;
    }
    .buttons-container {
      height: 48px;
      > button {
        width: 44px;
        font-size: 24px;
      }
    }
  }
`;
