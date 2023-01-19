import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {createGlobalStyle} from "styled-components";

import {TasksProvider} from "./contexts/Tasks";

const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", "sans-serif", "Arial";
    
  }
 
`;

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <TasksProvider>
            <GlobalStyle />
            <App />
        </TasksProvider>
    </React.StrictMode>
);
