import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";
import SearchBar from "../components/SearchBar";
import TasksList from "../components/TasksList/index";
import AddTaskBar from "../components/AddTaskBar";
import FilterButtons from "../components/FilterButtons";
import { Container, Filter } from "./styles";
import { TasksProvider } from "../context/TasksContext";

function App() {
  return (
    <TasksProvider>
      <Container>
        <Header />
        <ProgressBar />
        <Filter>
          <FilterButtons />
          <SearchBar />
        </Filter>
        <AddTaskBar />
        <TasksList />
      </Container>
    </TasksProvider>
  );
}

export default App;
