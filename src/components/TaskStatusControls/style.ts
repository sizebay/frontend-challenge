import { MdOutlineSearch } from 'react-icons/md';
import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  height: 24px;
  border-radius: 4px;
  margin-top: 2px;
  text-align: left;
  display: flex;
  align-items: center;
`;

export const ContainerControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0;
`;

export const IconSearch = styled(MdOutlineSearch)`
  color: #848484;
  font-size: 24px;
`;
