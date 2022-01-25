import styled from 'styled-components';

import { ItemsArea } from '../../styles/ItemsArea';

export const PendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow: hidden;
  height: 400px;
  width: 100%;
`;

export const CustomItemsArea = styled(ItemsArea)`
  margin-top: 0;
`;
