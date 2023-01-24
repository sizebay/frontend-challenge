import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 24px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.background.tertiary};
`;

export const Progress = styled(Container)<{ percent: number }>`
  background-color: ${({ theme }) => theme.colors.green};
  width: ${({ percent }) => `${percent}%`};
`;
