import React, { useState } from "react";

import { Container, ContentArea, ButtonArea } from "./styles";

export default function Item(props) {
  const { content } = props;
  const [status, setStatus] = useState({
    isDone: false,
    isPending: true
  });

  return (
    <Container status={status}>
      <ContentArea>
        <input type="text" value={content}/>
      </ContentArea>
      <ButtonArea>
        <button id="removeButton">
          <div className="border">
            -
          </div>
        </button>
        <button id="doneButton">
          <div className="border">
            ✓
          </div>
        </button>
      </ButtonArea>
    </Container>
  );
}
