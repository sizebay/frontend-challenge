import styled, { css } from "styled-components";
import defaultTheme from "../../styles/themes/default";

const baseButtonTheme = {
    text: defaultTheme.white,
    border: "none",
    padding: "11.7px",
};

export const deleteTheme = {
    ...baseButtonTheme,
    background: "#E34F4F",
};

export const saveTheme = {
    ...baseButtonTheme,
    background: "#5DE290",
    radius: "0px 4px 4px 0px",
};

export const addTheme = {
    ...baseButtonTheme,
    background: "#4DA6B3",
    radius: "0px 4px 4px 0px",
};

export const doneTheme = {
    ...baseButtonTheme,
    text: defaultTheme.gray[600],
    background: defaultTheme.white,
    radius: '20px',
    padding: '8px 16px 6px 16px',
    border: "1px solid" + defaultTheme.gray[400],

};

export const doneSelectTheme = {
    ...baseButtonTheme,
    text: defaultTheme.grayBlue,
    background: defaultTheme.white,
    radius: '20px',
    padding: '8px 16px 6px 16px',
    border: "1px solid" + defaultTheme.grayBlue,

};

export const ButtonThemed = styled.button`
  color: ${(props) => props.theme.text};
  border: ${(props) => props.theme.border};
  border-radius: ${(props) => props.theme.radius};
  background: ${(props) => props.theme.background};
  padding: ${(props) => props.theme.padding || "11.7px"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  height: fit-content;
  gap: 0.5em;
  font-size: ${(props) => props.theme.fontSize || "inherit"};
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    filter: opacity(0.8);
  }

  ${(props) =>
    props.disabled &&
    css`
      filter: opacity(0.5);
      pointer-events: none;
    `}
`;
