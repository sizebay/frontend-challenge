import React from "react";
import "./global.css";
import { Header } from "./components/header/Header";
import Progress from "./components/ProgressBar/Progress";
import Filters  from "./components/Filters/Filters";
import { NewTasks } from "./components/NewTasks/NewTasks"
import Tasks from "./components/Tasks/Tasks";
import { SMain } from "./style";

const App = () => {
  return (
    <SMain>
      <Header/>
      <Progress/>
      <Filters/>
      <NewTasks/>
      <Tasks/>
    </SMain>
  )
};

export default App;
