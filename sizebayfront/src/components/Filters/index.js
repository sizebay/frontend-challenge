import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Container, PendingButton, DoneButton } from './styles';

import { ItemContext } from '../../contexts/item';

export default function Filters() {
  const { filterControl, handleClickDone, handleClickPending } = useContext(ItemContext);

  return (
    <Container>
      <Link to={filterControl === 'default' ? '/done' : '/'}>
        <DoneButton
          onClick={handleClickDone}
          status={filterControl}
        >
          Done
        </DoneButton>
      </Link>

      <Link to={filterControl === 'default' ? '/pending' : '/'}>
        <PendingButton
          onClick={handleClickPending}
          status={filterControl}
        >
          Pending
        </PendingButton>
      </Link>
    </Container>
  );
}
