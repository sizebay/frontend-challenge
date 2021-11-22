import styled from 'styled-components';

export const Container = styled.div`
  & {
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 19px;
    border: 1px solid #DBDBDB;
    border-radius: 4px;
    padding: 1.1rem;
    background: #F4F4F4;
    color: #848484;
    margin: auto;
    margin-bottom: 1rem;
    opacity: 1;

    &:last-child {
      margin-bottom: 1rem;
    }

    &:hover {
      #tooltip {
        visibility: visible;
      }
    }

    @media screen and (max-width: 768px) {
      &:last-child {
        margin-bottom: 1rem;
      }
    }
  }
`;

export const Options = styled.div`
  & {
    display: flex;

    & button {
      padding: 0.7rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      margin-right: 1rem;

      &:last-child {
        margin-right: 0;
      }
    }
  }
`;
