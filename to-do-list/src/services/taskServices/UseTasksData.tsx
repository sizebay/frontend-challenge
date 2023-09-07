import { useTaskContext } from "./UseTaskContext";

export const UseTaskData = () => {

    const { taskData, setTaskData } = useTaskContext();
      
    const AddTaskData = (textData: string) => {

        if (textData.trim() !== "") {
            const newTask = {
              id: Math.floor(Math.random() * 10000) + 1,
              text: textData,
              isDone: false
            };
      
            setTaskData((prevTasks) => [...prevTasks, newTask]);
        }
    }

    const UpdateTaskData = (id: number, textData: string) => {
        setTaskData(
            taskData.map((task) =>
                task.id === id ? { ...task, text: textData } : task
            )
        );
    }

    const UpdateTaskDataState = (id: number) => {
        setTaskData(
            taskData.map((task) =>
                task.id === id ? { ...task, isDone: true } : task
            )
        );
    }

    const DeleteTaskData = (id: number) => {
        setTaskData(taskData.filter((task) => task.id !== id));
    }
    

    return { AddTaskData, UpdateTaskData, UpdateTaskDataState,  DeleteTaskData}
}


