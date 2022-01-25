import styled from 'styled-components';

export const ItemsArea = styled.div`
  height: 100%;

  margin-top: 1rem;

  overflow: auto;

  ::-webkit-scrollbar {
    width: 9px;
  }

  ::-webkit-scrollbar-track {
    background: #E4E4E4;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #848484;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555555;
  }
`;
