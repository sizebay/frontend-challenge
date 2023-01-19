import React, { useState } from "react";
import { ProgressWrapper, ProgressDone } from "./style";

const ProgressBar = ({ done }) => {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };
    setStyle(newStyle);
  }, 500);

  return (
    <ProgressWrapper>
      <ProgressDone style={style}>{done}</ProgressDone>
    </ProgressWrapper>
  );
};

export default ProgressBar;
