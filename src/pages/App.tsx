import { ThemeProvider } from "styled-components";
import { TasksProvider } from "../context/TasksContext";
import { mainTheme } from "../styles/theme";
import { Container, Filter } from "./styles";
import Global from '../styles/Global'
import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";
import SearchBar from "../components/SearchBar";
import TasksList from "../components/TasksList/index";
import AddTaskBar from "../components/AddTaskBar";
import FilterButtons from "../components/FilterButtons";

function App() {
  return (
    <TasksProvider>
      <ThemeProvider theme={mainTheme}>
        <Global theme={mainTheme}/>
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
      </ThemeProvider>
    </TasksProvider>
  );
}

export default App;
