import styled from "styled-components";

export const NoResultsMessage = styled.span`
  text-align: left;
  display: flex;
  color: ${({ theme }) => theme.colors.grey};
  font-size: 14px;

  @media screen and (max-width: 768px) {
    font-size: 15px;
    display: unset;
  }
`;

export const ClearSearchButton = styled.span`
  padding: 0px 4px 0px 4px;
  text-decoration: underline;
  cursor: pointer;
`;
