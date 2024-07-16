import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.tsx";
import { ThemeProvider } from "styled-components";
import { primaryTheme } from "./themes/primary.theme.ts";
import { GlobalStyle } from "./themes/globalStyle.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={primaryTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
