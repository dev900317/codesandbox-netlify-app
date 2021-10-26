import { StrictMode } from "react";
import ReactDOM from "react-dom";
import GlobalReset from "./components/GlobalReset";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <GlobalReset />
    <App />
  </StrictMode>,
  rootElement
);
