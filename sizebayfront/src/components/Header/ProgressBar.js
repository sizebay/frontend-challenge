import styled, { css } from 'styled-components';

import { colors } from './helpers/colors';

export const ProgressBar = styled.div`
  height: 24px;
  width: 99.5%;
  background: ${colors.greyProgressBar};
  border-radius: 4px;
  margin: 1rem 0 1rem 0;

  & > div#filler {
    background: ${colors.greenProgressBar};
    height: 100%;
    width: 100%;
    border-radius: 4px 0 0 4px;
  }
`;
