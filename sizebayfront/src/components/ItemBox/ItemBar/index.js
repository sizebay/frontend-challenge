import React from 'react';

import { Wrapper, Input, Button } from './styles';

export default function ItemBar() {

  return (
    <Wrapper>
      <Input
        type="text"
        placeholder="Add new item..."
      />
      <Button>
        <div id="border">
          +
        </div>
      </Button>
    </Wrapper>
  );
}
