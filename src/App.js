
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Puzzle1 from './components/Puzzle1';

function App() {

  return (
    <>
    <Router>
      <div className="App">
        <Route
          path="/musicians"
        />
        <Route
          path="/musicians"
        />
        <Puzzle1 />
      </div>
    </Router>
    </>
  );
}

export default App;