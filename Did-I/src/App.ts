import { styled } from "styled-components";
export const Text = styled.p`
  color: ${({ theme }) => theme.colors.greenAddItem};
  font-family: ${({ theme }) => theme.font.Light};
  font-size: ${({ theme }) => theme.fontSizes.Medium60};
`;

export const Box = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
