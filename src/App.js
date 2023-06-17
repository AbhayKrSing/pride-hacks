
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PuzzlePage from './components/PuzzlePage';


function App() {

  return (
    <>
    <Router>
    <Routes>
        <Route
          path="/"
        />
        <Route
          path="/musicians/1"
          
        />
        <Route
          path="/musicians/:currentId"
          element={<PuzzlePage />}
        />
        <Route
          path="/leaders"
        />
        <Route
          path="/leaders/:id"
        />
      
    
    </Routes>
    </Router>
    </>
  );
}

export default App;