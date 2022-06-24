import styled from "styled-components";

export const Wrapper = styled.form`
  display: flex;
  align-items: center;
  align-self: center;
  width: 100%;
  max-width: 680px;
  > div {
    width: 100%;
    border: 1px solid var(--secundary-gray);
    height: 100%;
    border-radius: 4px 0 0 4px;
    padding: 13.5px 15px;
    > input {
      width: 100%;
      height: 100%;
      border: none;
      color: #1c1c1c;
      &::placeholder {
        font-size: 14px;
        opacity: 0.5;
        color: var(--primary-gray);
      }
    }
  }
  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--secundary-color);
    color: #ffffff;
    border: none;
    cursor: pointer;
    width: 54px;
    height: 48px;
    font-size: var(--title-5);
    border-radius: 0 4px 4px 0;
    transition: 0.4s;
    > svg {
      transition: 0.4s;
    }
    &:hover {
      > svg {
        transform: scale(1.1);
      }
      color: var(--secundary-gray);
    }
    &:disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  }
`;
