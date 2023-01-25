import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  height: 218px;
  gap: 8px;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background.tertiary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 9px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  @media screen and (max-width: 800px) {
    max-height: 370px;
    height: 100%;
  }
`;

export const BoxItem = styled.div`
  flex: 1;
  display: flex;
`;

export const Container = styled.li`
  display: flex;
  position: relative;

  .tooltip {
    background-color: #848484;
    font-size: 14px;
    font-weight: normal;
    z-index: 9999;
  }
`;

export const Item = styled.div<{ done: boolean }>`
  flex: 1;
  color: ${({ theme, done }) =>
    done ? theme.colors.background.primary : theme.colors.primary};
  background: ${({ done, theme }) =>
    done
      ? theme.colors.green
      : "rgba(244, 244, 244, 1) 0% 0% no-repeat padding-box"};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.border};

  display: flex;
  align-items: stretch;

  cursor: pointer;
`;

export const Form = styled.form`
  flex: 1;
  background-color: inherit;
`;

export const EditText = styled.input`
  padding: 15px 0px 14px 16px;
  width: 100%;

  font-family: ${({ theme }) => theme.fonts.roboto};
  border-radius: 4px 0px 0px 4px;
  outline: none;

  cursor: pointer;
`;

export const ActionButton = styled.button<{ variant: "error" | "success" }>`
  background-color: ${({ theme, variant }) =>
    variant === "error" ? theme.colors.red : theme.colors.green};
  color: ${({ theme }) => theme.colors.background.primary};
  padding: 0px 9px;
  height: 100%;
  cursor: pointer;
  border: none;

  :last-child {
    border-radius: 0px 4px 4px 0px;
  }
`;
