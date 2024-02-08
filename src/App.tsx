import React, { Fragment } from "react";
import Home from "./pages/Home";
import { GlobalStyle } from "./styles";
import { TasksProvider } from "./context/tasks/tasks";

function App() {
  return (
    <TasksProvider>
        <Fragment>
        <GlobalStyle />
        <Home />
      </Fragment>
    </TasksProvider>
  );
}

export default App;
