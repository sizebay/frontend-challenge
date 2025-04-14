import styled from "styled-components";
import { KeyboardEvent, useState } from "react";
import moment from "moment";
import { Header } from "./components/Header/Header";
import { ProgressBar } from "./components/ProgressBar/ProgressBar";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { InputAddItem } from "./components/InputAddItem/InputAddItem";
import { TasksContentComponent } from "./components/TasksContentComponent/TasksContentComponent";

moment().format();

const DivContainer = styled.div`
  max-width: 800px;
  max-height: 650px;
  font-family: Roboto;
  padding: 54px 60px 101px 60px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 4px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 600px) {
    width: 341px;
    height: 780px;
    padding: 16px;
  }
`;

export type Tasks = {
  id: number;
  task: string;
  done: boolean;
};

function App() {
  const [taskItem, setTaskItem] = useState<string>("");
  const [taskRender, setTaskRender] = useState<Tasks[]>([]);
  const [taskFilter, setTaskFilter] = useState<Tasks[]>([]);
  const [directionRender, setDirectionRender] = useState<string>("");

  const addTasks = () => {
    if (!taskItem.trim()) return;
    setTaskRender([
      ...taskRender,
      { id: taskRender.length + 1, task: taskItem, done: false },
    ]);
    setTaskItem("");
    setDirectionRender("standard");
  };

  const removeTask = (idTask: number) => {
    setTaskRender(
      taskRender.filter((item) => {
        return item.id != idTask;
      })
    );
    setDirectionRender("standard");
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addTasks();
    }
  };

  const setDoneTask = (id: number) => {
    setTaskRender(
      taskRender.map((item) => {
        if (item.id === id) {
          return { ...item, done: true };
        }
        return item;
      })
    );
  };

  const editTask = (taskEdited: Tasks) => {
    setTaskRender(
      taskRender.map((item) => {
        if (item.id === taskEdited.id) {
          return { ...item, task: taskEdited.task };
        }
        return item;
      })
    );
  };

  const CurrentTasks = () => {
    if (directionRender === "standard") {
      return taskRender;
    }
    if (taskFilter.length || directionRender === "filter") {
      return taskFilter;
    }

    return taskRender;
  };

  return (
    <DivContainer>
      <Header />
      <ProgressBar tasks={taskRender} />
      <SearchBar
        setTaskFilter={setTaskFilter}
        taskRender={taskRender}
        setDirectionRender={setDirectionRender}
      />
      <InputAddItem
        taskItem={taskItem}
        handleKeyPress={handleKeyPress}
        setTaskItem={setTaskItem}
        addTasks={addTasks}
      />
      <TasksContentComponent
        CurrentTasks={CurrentTasks}
        removeTask={removeTask}
        setDoneTask={setDoneTask}
        editTask={editTask}
        setDirectionRender={setDirectionRender}
      />
    </DivContainer>
  );
}

export default App;
