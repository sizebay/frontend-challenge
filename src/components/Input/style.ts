import { GrSearch } from "react-icons/gr";
import { CgClose } from "react-icons/cg";
import styled from "styled-components";
import { device } from "../../styles";

export const TaskInput = styled.input`
  background-color: #f7f7f8;
  border: 1px solid #dbdbdb;
  border-radius: 4px 0px 0px 4px;
  padding: 1rem 1.2rem;
  width: 100%;
  font-size: 16px;
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 2;
  position: relative;

  @media ${device.mobileL} {
    flex: auto;
  }
`;

export const SearchInput = styled.input`
  background-color: #ffffff;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  padding: 0.6rem 1rem;

  width: 100%;
`;

export const SearchIcon = styled(GrSearch)`
  padding: 0;
  position: absolute;
  left: auto;
  right: 10px;
`;

export const SearchClearIcon = styled(CgClose)`
  padding: 0;
  position: absolute;
  left: auto;
  right: 10px;
`;
