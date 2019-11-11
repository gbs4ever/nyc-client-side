import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";

it("renders without crashing", () => {
  const div = document.createElement("root");
  <Provider>
    <App />
  </Provider>;

  ReactDOM.unmountComponentAtNode(div);
});
