import styled from 'styled-components';

import { ItemsArea } from '../../styles/ItemsArea';

export const DoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow: hidden;
  height: 400px;
  width: 100%;

  color: #848484;
  font-size: 0.85rem;

  span {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const CustomItemsArea = styled(ItemsArea)`
  margin-top: 0;
`;
