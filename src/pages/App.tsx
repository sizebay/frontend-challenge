import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";
import SearchBar from "../components/SearchBar";
import TasksList from "../components/TasksList/index";
import { Container } from "./styles";
import useData from "../useTasks";
import AddTaskBar from "../components/AddTaskBar";
import ITasks from "../types/ITasks";
import { useEffect, useState } from "react";
import { TasksProvider } from "../context/TasksContext";

function App() {
  const { data: tasks, error: tasksError } = useData();
  const [tasksDb, setTasksDb] = useState<ITasks[] | null>(tasks);

  useEffect(() => {
    setTasksDb(tasks);
  }, [tasks]);


  return (
    <TasksProvider>
      <Container>
        <Header />
        <ProgressBar />
        <SearchBar />
        <AddTaskBar />
        <TasksList />
      </Container>
    </TasksProvider>
  );
}

export default App;
