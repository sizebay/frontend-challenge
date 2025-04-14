import styled from "styled-components";

export const DivTask = styled.input<{ $background?: string }>`
  width: 98%;
  display: flex;
  justify-content: space-between;
  margin: 8px 0;
  height: 45px;
  background: ${(props) => props.$background} 0% 0% no-repeat padding-box;
  border: 1px solid #dbdbdb;
  opacity: 1;
  border-radius: 5px;
`;

export const EditButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 100%;
  background-color: #5de290;
`;

export const ExcludeButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 100%;
  background-color: #e34f4f;
`;
