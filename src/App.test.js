import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import App from "./App";
import LoginForm from "./components/LoginForm";
import { Provider } from "react-redux";
import { act as domAct } from "react-dom/test-utils";
import { act as testAct, create } from "react-test-renderer";
let container = null;
//run before each test
beforeEach(() => {
  container = document.createElement("root");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

//tests
it("renders without crashing", () => {
  <Provider>
    <App />
  </Provider>;
});
//tests
it("check that login form loads", () => {
  <LoginForm></LoginForm>;
});
