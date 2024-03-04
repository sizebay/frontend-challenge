import styled from "styled-components";

export const FormGroup = styled.div`
  display: flex;
  flex-direction: row;

  button {
    border-radius: 4px;
  }

  input, button {
    &:not(:first-child):not(:last-child) {
      border-radius: 0;
    }

    &:first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    &:not(:first-child):last-child {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
`;