// @flow

import React from "react";
import { render } from "react-dom";
import App from "./App";
import Perf from "react-addons-perf";

// only for development, delete when shipping production
window.Perf = Perf;
Perf.start();

const renderApp = () => {
  render(<App />, document.getElementById("app"));
};

renderApp();

if (module.hot) {
  module.hot.accept("./App", () => {
    renderApp();
  });
}
