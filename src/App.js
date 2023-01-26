import React from "react";
import styled from "styled-components";
import "./global.css";
import { Header } from "./components/header/Header";
import Progress from "./components/ProgressBar/Progress";
import Filters  from "./components/Filters/Filters";
import { NewTasks } from "./components/NewTasks/NewTasks"
import Tasks from "./components/Tasks/Tasks";

const SMain = styled.main`
  display: inline-block;
  margin: auto;
  width: 740px;
  height: 590px;
  max-width: 100%;
  background-color: #ffffff;
  padding: 60px;
  @media screen and (max-width: 391px) and (max-height:900px) {
    width: 100%;
    padding: 60px 16px;
    height: 100%;
  }
`

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
