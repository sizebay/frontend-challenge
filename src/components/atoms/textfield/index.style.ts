import styled from "styled-components";
import { TextfieldStyle } from "./index.types";

const PADDING_HORIZONTAL = 16;

const handleInputSize = (size: TextfieldStyle['size']) => {
  switch (size) {
    case 'large':
      return `
        padding: 16px ${PADDING_HORIZONTAL}px;
      `;
    default:
      return `
        padding: 10px ${PADDING_HORIZONTAL}px;
      `;
  }
}

export const Textfield = styled.div`
  width: 100%;
  position: relative;
`;

export const TextfieldInput = styled.input<TextfieldStyle>`
  ${props => handleInputSize(props.size)}
  border: 1px solid #BDBDBD;
  border-radius: 4px;
  min-width: 150px;
  width: 100%;
  color: inherit;

  &:not(:read-only) {
    &:hover {
      border-color: #4DA6B3;
    }

    &:focus, &:active {
      outline: #4DA6B3 auto 1px;
    }
  }

  &:read-only {
    outline: none;
    background-color: #F4F4F4;
  }

`;

export const TextfieldIconSuffix = styled.div`
  position: absolute;
  right: ${PADDING_HORIZONTAL}px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 1;
`;