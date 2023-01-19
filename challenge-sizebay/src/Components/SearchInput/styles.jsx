import styled from "styled-components";
import { palette } from "../../colors/colors";

export const InputWrapper = styled.div`
  position: relative;
  width: min-content;
`;
export const Input = styled.input`
  width: 28.125rem;
  border: none;
  border: 1px solid ${palette.lightGrey};
  border-radius: 4px;
  color: ${palette.grey};
  font-size: 14px;
  padding: 10px 16px;
`;

export const Search = styled.img`
  height: 14px;
  position: absolute;
  top: 13px;
  right: 12px;

`;
