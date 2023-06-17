
import './App.css';
import React from "react";

import { Routes, Route } from "react-router-dom";
import PuzzlePage from './components/PuzzlePage';
import Welcome from './components/Welcome'

function App() {

  return (
    <>

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
</>
  );
}

export default App;