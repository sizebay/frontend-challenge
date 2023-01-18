import styled from "styled-components";
import { palette } from "../../colors/colors";

export const ButtonWrapper = styled.button`
  min-width: 4rem;
  height: 2rem;
  border-radius: 1rem;
  border: 1px solid ${palette.lightGrey};
  text-transform: capitalize;
  background-color: transparent;
  font-size: 14px;
`;
