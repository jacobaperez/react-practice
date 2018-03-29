import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "../public/style.css";
import Landing from "./Landing";
import Search from "./Search";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={Search} />
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
