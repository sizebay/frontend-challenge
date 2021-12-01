import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-grow: 1;

  // Mobile Configuration
  @media (max-width: 768px) {
    margin-top: 1rem;
    justify-content: flex-end;
  }
`;

export const PendingButton = styled.button`
  flex-grow: 0;

  border: 1px solid #DBDBDB;
  border-radius: 25px;
  background: #FFF;
  padding: 0.5rem 1rem 0.5rem 1rem;
  text-align: center;
  font-size: 14px;
  color: #848484;
  cursor: pointer;
  margin-left: 0.5rem;
  height: 100%;

  ${props => (props.status === 'pending') && css`
  & {
    background: #F7F7F8;
    color: #4DA6B3;
    border: 1px solid #4DA6B3;
    flex-grow: 0;

    &::before {
      content: "✓\t"
    }
  }
  `}
  `;

export const DoneButton = styled.button`
  flex-grow: 0;

  border: 1px solid #DBDBDB;
  border-radius: 25px;
  background: #FFF;
  padding: 0.5rem 1rem 0.5rem 1rem;
  text-align: center;
  font-size: 14px;
  color: #848484;
  cursor: pointer;
  height: 100%;

  ${props => (props.status === 'done') && css`
    & {
      background: #F7F7F8;
      color: #4DA6B3;
      border: 1px solid #4DA6B3;
      flex-grow: 0;

      &::before {
        content: "✓\t"
      }
    }
  `}
`;
