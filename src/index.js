import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Modal from "./components/Modal";
import Header from "./components/Header";
import { Route, BrowserRouter as Router } from "react-router-dom";

const Routing = () => {
  return (
    <Router>
      <Header text="HOOKED" />
      <div>
        <Route path="/" exact component={App} />
        <Route path="/modal" component={Modal} />
      </div>
    </Router>
  );
};

ReactDOM.render(<Routing />, document.getElementById("root"));
