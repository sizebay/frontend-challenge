import styled from "styled-components";

export const ExternalProgressiveBar = styled.div`
  width: 100%;
  height: 24px;
  background-color: ${({ theme }) => theme.colors.grayLight};
`;

type InternalProgressiveBar = {
  width: number;
};

export const InternalProgressiveBar = styled.div<InternalProgressiveBar>`
  width: ${({ width }) => (width > 100 ? `100%` : `${width}%`)};
  height: 100%;
  background-color: ${({ theme }) => theme.colors.greenTaskBar};
  transition: width 1s linear;
`;
