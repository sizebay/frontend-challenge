import Header from '../components/Header'
import ProgressBar from '../components/ProgressBar'
import SearchBar from '../components/SearchBar'
import TasksList from '../components/TasksList/index'
import { Container } from './styles'
import useData from "../useTasks";
import AddTaskBar from '../components/AddTaskBar'

function App() {
  const { data: tasks, error: tasksError } = useData();
  
  if (tasksError) {
    console.log("There's an error on the requisition");
  }

  return (
    <Container>
      <Header />
      <ProgressBar />
      <SearchBar />
      <AddTaskBar/>
      <TasksList tasks={tasks} />
    </Container>
  );
}

export default App
