import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import FilterContextProvider from "./context/context";

ReactDOM.render(
  <React.StrictMode>
    <FilterContextProvider>
      <App />
    </FilterContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
