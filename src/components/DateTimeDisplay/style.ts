import styled from "styled-components";

export const DateTimeDisplayContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DateContainer = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const LargeText = styled.div`
  font-size: ${(props) => props.theme.fontSizes.large};
`;

export const SmallText = styled.div`
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

export const DayOfWeek = styled.div`
  margin-left: auto;
  font-size: ${(props) => props.theme.fontSizes.medium};
`;
