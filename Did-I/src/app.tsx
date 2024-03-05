import { useState } from "react";
import * as S from "./app";
import { Date } from "./components/Date/date";
import { ProgressiveBar } from "./components/ProgressiveBar/progressiveBar";
import { List } from "./components/List/list";

function App() {
  const [add, setAdd] = useState(0);
  return (
    <S.Box>
      <Date />
      <ProgressiveBar value={add} />
      <List />
    </S.Box>
  );
}

export default App;
