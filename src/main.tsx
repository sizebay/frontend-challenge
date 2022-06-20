import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Providers from "./providers";
import { GlobalStyle } from "./styles/global";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <App />
      <GlobalStyle />
    </Providers>
  </React.StrictMode>
);
