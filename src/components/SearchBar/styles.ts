import styled from "styled-components";

export const SearchContainer = styled.div`
  position: relative;
  width: 60%;
  height: 48px;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;

  @media screen and (max-width: 768px) {
    order: 1 !important;
    width: 100%;
  }
`;

export const SearchInput = styled.input`
  padding-left: 30px;
  border: none;
  color: ${({ theme }) => theme.colors.grey};
  top: 0;
  height: 100%;
  width: 80%;
  background-color: transparent;
  outline: none;
  font-size: 16px;

  &:focus {
    border-color: rgba(0, 0, 0, 0.3);
  }
`;

export const IconButton = styled.button`
  position: relative;
  height: 36px;
  width: 36px;
  right: 10px;
  border: none;
  z-index: 1;
  cursor: pointer;
  background: none;

  &:hover {
    color: white;
    &::after {
      opacity: 1;
      transform: scale(1);
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    border-radius: 50%;
    z-index: -1;
    background: #000;
    transition: 0.2s ease;
    transform: scale(0.6);
    opacity: 0;
  }
`;