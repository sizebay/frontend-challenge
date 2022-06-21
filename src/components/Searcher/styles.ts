import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  gap: 10px;
  margin-bottom: 6px;
  > div {
    display: flex;
    border-radius: 4px;
    border: 1px solid var(--secundary-gray);
    padding: 10px 10px 9px 15px;
    align-items: center;
    > input {
      border: none;
      width: 100%;
      height: 100%;
      color: #1c1c1c;
      &::placeholder {
        font-size: 14px;
        color: var(--primary-gray);
      }
    }
    > button {
      background-color: transparent;
      border: none;
      font-size: 22px;
      color: var(--primary-gray);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  > nav {
    align-self: end;
    display: flex;
    gap: 0.5rem;
  }
`;

interface ButtonProps {
  activated: boolean;
}

export const Button = styled.button<ButtonProps>`
  transition: 0.4s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background-color: #ffffff;
  border: 1px solid
    ${({ activated }) =>
      activated ? css`var(--secundary-color)` : css`var(--secundary-gray)`};
  border-radius: 17px;
  padding: 8px 16px 6px 16px;
  color: ${({ activated }) =>
    activated ? css`var(--secundary-color)` : css`var(--secundary-gray)`};
  font-size: 14px;
`;
