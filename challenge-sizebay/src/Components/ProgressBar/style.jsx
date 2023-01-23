import styled from "styled-components";
import { palette } from "../../colors/colors";

export const ProgressWrapper = styled.div`
  background-color: ${palette.progressGrey};
  border-radius: 4px;
  height: 24px;
  width: 680px;
  margin: 24px 0;

  @media screen and (max-width: 340px) {
    width: 308px;
  }
`;

export const ProgressDone = styled.div`
  background: ${palette.green};
  border-radius: 4px;
  height: 24px;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ease 0.3s;
  color: #232323;
`;