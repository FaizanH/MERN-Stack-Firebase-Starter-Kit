import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { Component } from "react";

import Example from "./components/example.component";

function App() {
  return (
    <Router>
      {/* Display Example Component */}
      <div className="container-fluid">
        <Example />
      </div>
    </Router>
  );
}

export default App;
