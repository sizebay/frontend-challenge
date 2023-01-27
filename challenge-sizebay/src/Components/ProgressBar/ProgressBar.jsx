import React, { useState, useContext, useCallback } from "react";
import {useLayoutEffect} from "react";
import {GlobalContext} from "../../Contexts/GlobalContext";
import { ProgressWrapper, ProgressDone } from "./style";
import confetti from 'canvas-confetti'
import {useEffect} from "react";

const ProgressBar = () => {
  const [style, setStyle] = useState({});
  const {states} = useContext(GlobalContext);

  const getPercentageDone = useCallback(
    (part, total) => {
      return  part * 100 / total;
  }, [])    
  useLayoutEffect(() => {
    const newStyle = {
      width: `${getPercentageDone(states.done.length, states.pending.length + states.done.length)}%`,
    };
    setStyle(newStyle);

  }, [states.pending.length, states.done.length, getPercentageDone]);
  
  useEffect(() => {
    style.width === '100%' && confetti()
  }, [style.width])
  return (
    <ProgressWrapper>
      <ProgressDone style={style} />
    </ProgressWrapper>
  );
};

export default ProgressBar;
