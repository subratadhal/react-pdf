import React from "react";
import { render } from "react-dom";
import PrintPage from "./components/PrintPage";

const App = () => (
  <div>
    <PrintPage />
  </div>
);

render(<App />, document.getElementById("root"));
