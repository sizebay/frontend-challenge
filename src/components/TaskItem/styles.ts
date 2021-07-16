import styled from "styled-components";
import { FaMinus, FaCheck, FaUndo } from "react-icons/fa";

export const Wrapper = styled.div`
  position: relative;
`;

export const Container = styled.div<{ selected: boolean }>`
  border: 1px solid;
  border-color: ${({ theme }) => theme.defaults.borders};
  border-radius: 4px;
  height: 48px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  font: ${({ theme }) => theme.fonts.roboto14};
  background: ${({ selected, theme }) =>
    selected ? theme.colors.white : theme.colors.lightergray};
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  margin: 0 0.5rem 0 0;
`;

export const ButtonContainer = styled.div<{ selected: boolean }>`
  height: 100%;
  width: ${({ selected }) => (selected ? "88px" : 0)};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  background: white;
`;

export const Button = styled.div<{ color: string }>`
  height: 100%;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ color, theme }) => theme.colors[color]};
  color: ${({ color, theme }) => theme.colors[color]};

  &:hover {
    color: ${({ color, theme }) => theme.colors["dark" + color]};
    background: ${({ color, theme }) => theme.colors["dark" + color]};
  }
`;

export const FaMinusStyled = styled(FaMinus)`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  opacity: 0.8;
`;

export const FaCheckStyled = styled(FaCheck)`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  opacity: 0.8;
`;

export const FaUndoStyled = styled(FaUndo)`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  opacity: 0.8;
  padding: 2px;
`;

export const EditTag = styled.div<{ selected: boolean }>`
  background: ${({ theme }) => theme.colors.darkergray};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 4px;
  bottom: -60px;
  left: 50%;
  right: 50%;
  width: 86px;
  height: 50px;
  z-index: 9;
  transition: all 0.3s ease;
  opacity: ${({ selected }) => (selected ? 1 : 0)};
  visibility: ${({ selected }) => (selected ? "visible" : "hidden")};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  transform: translateX(-50%);

  &:before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: ${({ theme }) => `10px solid ${theme.colors.darkergray}`};
    border-top: 10px solid transparent;
    right: 50%;
    left: 50%;
    transform: translateX(-50%);
    top: -20px;
  }
`;
