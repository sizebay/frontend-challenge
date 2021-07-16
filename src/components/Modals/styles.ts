import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 996;
  opacity: 0.6;
  background: ${({ theme }) => theme.colors.white};
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 999;
  background: ${({ theme }) => theme.colors.white};
  max-width: 500px;
  max-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 5px 5px 10px gray;
  color: ${({ theme }) => theme.defaults.text};

  @media (max-width: 600px) {
    margin: auto 2rem;
  }
`;

export const Close = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const FaTimesStyled = styled(FaTimes)`
  cursor: pointer;
  color: ${({ theme }) => theme.defaults.text};

  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }
`;
