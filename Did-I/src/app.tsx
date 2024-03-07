import * as S from "./app";
import { DateHeader } from "./components/Date/dateHeader";
import { List } from "./components/List/list";

function App() {
  return (
    <S.Box>
      <DateHeader />
      <List />
    </S.Box>
  );
}

export default App;
