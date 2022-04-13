import TodoListPage from './Page/TodoList';
import { TaskProvider } from './Context/TaskContext';

function App() {
  return (
    <TaskProvider>
      <TodoListPage />
    </TaskProvider>
  )
}

export default App
