import React from "react";
import { Progress, Total } from "./styles";

const StatusBar = () => {
  return (
    <div>
      <Total>
        <Progress>
          <span></span>
        </Progress>
      </Total>
    </div>
  );
};

export default StatusBar;
