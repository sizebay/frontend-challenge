import React, { Fragment } from "react";
import Home from "./pages/Home";
import { GlobalStyle } from "./styles";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Home />
    </Fragment>
  );
}

export default App;
