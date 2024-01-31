import { MdOutlineSearch } from "react-icons/md";
import styled from "styled-components";

export const SearchContainer = styled.div`
  border-radius: 4px;
  display: flex;
  align-items: center;
  margin-left: auto;
  position: relative;
`;

export const Input = styled.input`
  width: 450px;
  height: 20px;
  padding: 10px;
  letter-spacing: 0px;
  opacity: 0.5;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.silverGray};
  border-radius: 4px;
  transition: background-color 0.3s;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 14px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.crystalWhite};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ButtonSearch = styled.button`
  width: 38px;
  height: 38px;
  background: ${({ theme }) => theme.colors.background.white};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  position: absolute;
  right: 0;
`;

export const IconSearch = styled(MdOutlineSearch)`
  font-size: 24px;
  width: 24px;
  height: 24px;
`;
