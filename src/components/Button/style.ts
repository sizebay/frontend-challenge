import styled from "styled-components";


export const ButtonThemed = styled.button`
  color: ${(props) => props.theme.text};
  border: ${(props) => props.theme.border || "none"};
  border-radius: ${(props) => props.theme.radius};
  background: ${(props) => props.theme.bg};
  width: ${(props) => props.theme.width};
  padding: ${(props) => props.theme.padding || "0.8rem"};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  cursor: pointer;
  height:  ${(props) => props.theme.height || "auto"};
  margin: 0;
  box-sizing: border-box;

  transition-duration: 0.4s;

  :hover {
    opacity: 0.7;
  }
`;

export const deleteTheme = {
  text: "#FFFFFF",
  bg: "#E34F4F",
  height: "48px",
};

export const editTheme = {
  text: "#FFFFFF",
  bg: "#f7e732",
  height: "48px",
};

export const saveTheme = {
  text: "#FFFFFF",
  bg: "#5DE290",
  radius: "0px 4px 4px 0px",
  height: "48px",
};

export const undoTheme = {
  text: "#FFFFFF",
  bg: "#848484",
  radius: "0px 4px 4px 0px",
  height: "48px",
};

export const cancelTheme = {
  text: "#FFFFFF",
  bg: "#848484",
  radius: "4px",
  height: "20px",
};

export const addTheme = {
  text: "#FFFFFF",
  bg: "#4DA6B3",
  radius: "0px 4px 4px 0px",
  padding: "0.9rem 1rem",
  height: "48px",
};

export const doneSelectTheme = {
  text: "#4DA6B3",
  border: "1px solid #4DA6B3",
  bg: "#F7F7F8",
  radius: "20px",
  padding: "0.5em 1.5em",
  width: "110px",
};

export const doneTheme = {
  text: "#848484",
  border: "1px solid #DBDBDB",
  bg: "#FFFFFF",
  radius: "20px",
  padding: "0.5em 1.5em",
  width: "110px",
};

export const AddTaskWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
