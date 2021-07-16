import styled from "styled-components";
import { FaSearch, FaPlus, FaCheck, FaTimes } from "react-icons/fa";

export const SearchInputContainer = styled.div`
  border: 1px solid;
  border-color: ${({ theme }) => theme.defaults.borders};
  border-radius: 4px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  width: 100%;
  gap: 0.5rem;
  font: ${({ theme }) => theme.fonts.roboto14};
`;

export const SearchInputStyled = styled.input`
  width: 100%;
  border: none;
  background: none;
  font: ${({ theme }) => theme.fonts.roboto14};

  &:focus,
  &:focus-visible {
    outline: none;
    border: none;
  }
`;

export const FaSearchStyled = styled(FaSearch)`
  color: ${({ theme }) => theme.defaults.text};
  cursor: pointer;
  transition: color 0.3s ease;
`;

export const FaTimesStyled = styled(FaTimes)`
  color: ${({ theme }) => theme.defaults.text};
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.black};
  }
`;

export const ItemInputContainer = styled.div`
  background: ${({ theme }) => theme.colors.lightgray};
  border: 1px solid;
  border-color: ${({ theme }) => theme.defaults.borders};
  border-radius: 4px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 2rem;
  overflow: hidden;
`;

export const ItemInputStyled = styled.input`
  width: 100%;
  border: none;
  background: none;
  margin: 0.5rem;
  font: ${({ theme }) => theme.fonts.roboto14};

  &:focus,
  &:focus-visible {
    outline: none;
    border: none;
  }
`;

export const ItemInputButton = styled.div`
  background: ${({ theme }) => theme.colors.blue};
  font-family: Roboto, sans-serif;
  font-size: 14px;
  color: ${({ theme }) => theme.fonts.roboto14u}
  height: 100%;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  cursor: pointer;
  width: 44px;

  &:hover {
    background: ${({ theme }) => theme.colors.darkblue};
  }
`;

export const FaPlusStyled = styled(FaPlus)`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  opacity: 0.8;

  ${ItemInputButton}:hover & {
    color: ${({ theme }) => theme.colors.darkblue};
  }
`;

export const FaCheckStyled = styled(FaCheck)`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  opacity: 0.8;
  padding: 1px;

  ${ItemInputButton}:hover & {
    color: ${({ theme }) => theme.colors.darkblue};
  }
`;
