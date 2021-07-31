import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import ChallengeSet from "./components/landing";
import Challenge from "./components/challenge";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={ChallengeSet} />
        <Route exact path="/challenge/:id" component={Challenge} />
      </Router>
    </div>
  );
}

export default App;
