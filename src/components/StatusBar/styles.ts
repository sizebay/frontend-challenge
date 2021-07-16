import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Message = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.defaults.text};
`;

export const Background = styled.div`
  width: 100%;
  height: 24px;
  margin-bottom: 1rem;
  background: ${({ theme }) => theme.colors.gray};
  position: relative;
  border-radius: 4px;
  overflow: hidden;
`;

export const ProgressBar = styled.div<{ progress: number }>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;

  width: ${({ progress }) => (progress ? `${progress}%` : 0)};
  height: 24px;
  margin-bottom: 1rem;
  background: ${({ theme }) => theme.colors.green};
  transition: width 1s ease;
`;
