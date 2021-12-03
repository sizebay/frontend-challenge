import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Container, PendingButton, DoneButton } from './styles';

export default function Filters() {
  const history = useHistory();
  const [doneActive, setDoneActive] = useState(false);
  const [pendingActive, setPendingActive] = useState(false);

  const handleClickDone = () => {
    if (pendingActive) {
      setPendingActive(false);
    }

    if (!doneActive) {
      history.push({
        pathname: '/done'
      });
      setDoneActive(true);
    } else {
      history.push({
        pathname: '/'
      });
      setDoneActive(false);
    }
  }

  const handleClickPending = () => {
    if (doneActive) {
      setDoneActive(false);
    }

    if (!pendingActive) {
      history.push({
        pathname: '/pending'
      });
      setPendingActive(true);
    } else {
      history.push({
        pathname: '/'
      });
      setPendingActive(false);
    }
  }

  return (
    <Container>
      <DoneButton onClick={handleClickDone} isActive={doneActive}>
        <Link to={history.location.pathname}>
          Done
        </Link>
      </DoneButton>

      <PendingButton onClick={handleClickPending} isActive={pendingActive}>
        <Link to={history.location.pathname}>
          Pending
        </Link>
      </PendingButton>
    </Container>
  );
}
