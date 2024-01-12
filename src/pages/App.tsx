import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";
import SearchBar from "../components/SearchBar";
import TasksList from "../components/TasksList/index";
import { Container } from "./styles";
import useData from "../useTasks";
import AddTaskBar from "../components/AddTaskBar";
import ITasks from "../types/ITasks";
import { useEffect, useState } from "react";

function App() {
  const { data: tasks, error: tasksError } = useData();
  const [tasksDb, setTasksDb] = useState<ITasks[] | null>(tasks);

  useEffect(() => {
    setTasksDb(tasks);
  }, [tasks]);

  const handleAddTask = (newTask: ITasks) => {
    setTasksDb((currentTasks) =>
      currentTasks ? [...currentTasks, newTask] : [newTask]
    );
  };

  if (tasksError) {
    console.log("There's an error on the requisition");
  }

  return (
    <Container>
      <Header />
      <ProgressBar />
      <SearchBar />
      <AddTaskBar tasksDb={tasksDb} addNewTask={handleAddTask} />
      <TasksList tasks={tasksDb} />
    </Container>
  );
}

export default App;
