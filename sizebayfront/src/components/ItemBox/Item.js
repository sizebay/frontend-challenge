import styled from 'styled-components';

export const Item = styled.span`
  & {
    display: block;
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
      margin-bottom: 0;
    }

    @media screen and (max-width: 768px) {
      &:last-child {
        margin-bottom: 1rem;
      }
    }
  }
`;
