import styled from "styled-components";

export const NewTaskWrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  max-width: 680px;
  max-height: 50px;

  border: 1px solid ${({ theme }) => theme.backgroundColors.grayBackgroundItem};
  border-radius: 4px;

  opacity: .5;

  &:focus-within {
    opacity: 1;
  }
`