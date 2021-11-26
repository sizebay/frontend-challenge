import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { itemContext } from '../../contexts/ItemContext';

import { Container, DoneButton, Form, PendingButton } from './styles';

export default function SearchBox() {
  const { filterControl, handleClickDone, handleClickPending} = useContext(itemContext);

  return (
    <Container>
      <nav>
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
      </nav>

      <Form>
        <input type="text" name="searchBar" id="" placeholder="Search items" />
      </Form>
    </Container>
  );
}
