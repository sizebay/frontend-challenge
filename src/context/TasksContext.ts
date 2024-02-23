import { createContext, useContext } from "react";
import ITasks  from "../types/ITasks";

interface TasksContextProps {
  tasks: ITasks[];
  addTask: (task: ITasks) => void;
}

const TasksContext = createContext<TasksContextProps>({
  tasks: [],
  addTask: () => {},
});

export const useTasksContext = () => useContext(TasksContext);

export const TasksProvider: React.FC = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask }}>
      {children}
    </TasksContext.Provider>
  );
};