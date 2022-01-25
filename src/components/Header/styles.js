import styled from 'styled-components';

export const HeaderContainer = styled.div`
  margin-bottom: 1rem;
  cursor: default;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const ProgressBar = styled.div`
  height: 24px;
  background: #E4E4E4;
  border-radius: 4px;
  margin-top: 1rem;
`;

export const FillingProgressBar = styled.div`
  background: #5DE290;
  height: 100%;
  width: 100%;
  width: ${props => props.doneTasks ? `${(props.doneTasks * 100) / props.totalItems}%` : '0%'};
  border-radius: 4px 0 0 4px;
`;

export const DateContainer = styled.section`
  & {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    p#numericDay {
      flex-grow: 0;
      font-size: 60px;
      font-weight: 500;
      color: #848484;
    }

    p#month {
      font-size: 24px;
      font-weight: 400;
      color: #848484;
    }

    p#year {
      font-size: 24px;
      font-weight: 300;
      color: #848484;
    }

    p#dayName {
      font-size: 24px;
      font-weight: 400;
      color: #848484;

    }

    & div {
      flex-grow: 3;
    }

    a {
      text-decoration: none;
    }
  }
`;
