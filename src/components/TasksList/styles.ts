import styled from "styled-components";

export const SectionCard = styled.section`
  display: flex;
  width: 100%;
  padding-bottom: 20px;
  flex-direction: column;
  gap: 13px;
  height: 276px;
  overflow: auto;
  z-index: 999999;
  overflow-x: hidden;
  padding-right: 4px;
  &::-webkit-scrollbar {
    width: 8px;
    background: #e4e4e4;
    border-radius: 20px;
  }
  ::-webkit-scrollbar-thumb {
    background: #848484;
    border-radius: 9px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
