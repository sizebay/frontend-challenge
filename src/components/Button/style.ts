import styled from "styled-components";

export const ButtonThemed = styled.button`
  color: ${(props) => props.theme.text};
  border: ${(props) => props.theme.border};
  border-radius: ${(props) => props.theme.radius};
  background: ${(props) => props.theme.bg};
  padding: ${(props) => props.theme.padding || "1em"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  gap: 0.5em;
`;

export const deleteTheme = {
  text: "#FFFFFF",
  border: "none",
  bg: "#E34F4F",
};

export const saveTheme = {
  text: "#FFFFFF",
  border: "transparent",
  bg: "#5DE290",
  radius: "0px 4px 4px 0px",
};

export const addTheme = {
  text: "#FFFFFF",
  border: "none",
  bg: "#4DA6B3",
  radius: "0px 4px 4px 0px",
};

export const doneSelectTheme = {
  text: "#4DA6B3",
  border: "1px solid #4DA6B3",
  bg: "#F7F7F8",
  radius: "20px",
  padding: "0.5em 1.2em",
};

export const doneTheme = {
  text: "#848484",
  border: "1px solid #DBDBDB",
  bg: "#FFFFFF",
  radius: "20px",
  padding: "0.5em 1.2em",
};

export const AddTaskWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
