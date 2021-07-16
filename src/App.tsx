import React from "react";
import { ThemeProvider } from "styled-components";
import { TaskProvider } from "./contexts/TaskContext";
import { Container } from "./styles";
import DateHeader from "./components/DateHeader";
import StatusBar from "./components/StatusBar";
import FilterBar from "./components/FilterBar";
import TaskContainer from "./components/TaskContainer";
import { AddItemInput } from "./components/Inputs";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TaskProvider>
        <Container>
          <DateHeader />
          <StatusBar />
          <FilterBar />
          <AddItemInput />

          <TaskContainer />
        </Container>
      </TaskProvider>
    </ThemeProvider>
  );
}

export default App;
