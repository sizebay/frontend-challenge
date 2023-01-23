import React, { useState, useContext } from "react";
import { useLayoutEffect } from "react";
import { GlobalContext } from "../../Contexts/GlobalContext";
import { ProgressWrapper, ProgressDone } from "./style";

const ProgressBar = () => {
  const [style, setStyle] = useState({});
  const { states } = useContext(GlobalContext);

  const percentageDone = (part, total) => part * 100 / total;

  useLayoutEffect(() => {
    const newStyle = {
      width: `${percentageDone(states.done.length, states.pending.length + states.done.length)}%`,
    };
    setStyle(newStyle);
  }, [states.pending.length, states.done.length]);

  return (
    <ProgressWrapper>
      <ProgressDone style={style} />
    </ProgressWrapper>
  );
};

export default ProgressBar;
