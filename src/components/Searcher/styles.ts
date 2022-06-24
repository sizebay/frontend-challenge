import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 6px;
  > div {
    display: flex;
    border-radius: 4px;
    border: 1px solid var(--secundary-gray);
    padding: 10px 10px 9px 15px;
    align-items: center;
    max-width: 450px;
    width: 100%;
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
  @media (min-width: 650px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

interface iButtonProps {
  activated: boolean;
}

export const Button = styled.button<iButtonProps>`
  transition: 0.4s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background-color: #ffffff;
  cursor: pointer;
  border: 1px solid
    ${({ activated }) =>
      activated ? css`var(--secundary-color)` : css`var(--secundary-gray)`};
  border-radius: 17px;
  padding: 8px 16px 6px 16px;
  color: ${({ activated }) =>
    activated ? css`var(--secundary-color)` : css`var(--secundary-gray)`};
  font-size: 14px;
`;
