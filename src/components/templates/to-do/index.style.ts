import styled from "styled-components";

export const ToDo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 800px;
  height: 650px;
  padding: 60px;

  @media (max-width: 768px){
    padding: 16px;
    width: clamp(365px, calc(100vw - 16px), 800px);
    height: clamp(650px , 100svh, calc(100vh - 100px));
  }
`;

export const ToDoCalendar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ToDoCalendarDate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ToDoFilter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  > div {
    &:nth-child(1) {
      display: flex;
      gap: 8px;
      flex: 1;
    }

    &:nth-child(2) {
      flex: 1;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: flex-end;
    gap: 10px;

    > div {
      &:nth-child(2) {
        width: 100%;
      }
    }
  }
`;

export const ToDoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 72svh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #E4E4E4;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #848484;
    border-radius: 10px;

    &:hover {
      background: #797979;
    }
  }
`;

export const WarningMessageList = styled.div`
  label {
    text-decoration: underline;
    cursor: pointer;
  }
`;