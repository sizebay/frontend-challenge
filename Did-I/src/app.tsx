import { useState } from "react";
import * as S from "./app";
import { Date } from "./components/Date/date";
import { ProgressiveBar } from "./components/ProgressiveBar/progressiveBar";

function App() {
  const [add, setAdd] = useState(0);
  return (
    <S.Box>
      <Date />
      <ProgressiveBar value={add} />
    </S.Box>
  );
}

export default App;
