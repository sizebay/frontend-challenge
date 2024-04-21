import styled from "styled-components";

export const TaskListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;

  width: 100%;
  height: 100%;
  max-width: 680px;
  max-height: 280px;
`

export const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;  
  gap: 8px;

  padding-right: 2px;
  width: 100%;
  height: 216px;
  max-width: 680px;
  max-height: 216px;

  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 8px;
  } 
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.grayLight};
    border-radius: 9px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.grayDark}; 
    border-radius: 9px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.Mobile}) {
    height: 272px;
    max-height: 272px;
    padding: 0px;

    ::-webkit-scrollbar {
      width: 0px;
    } 
  }
`