import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`

const FilterBox = (props) => {
  return (
    <Box>
      {props.children}
    </Box>
  );
}

export default FilterBox;
