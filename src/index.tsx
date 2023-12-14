import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/App";

const root = ReactDOM.createRoot(
  document.getElementById("szb-app-root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

