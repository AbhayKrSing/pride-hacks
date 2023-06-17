
import './App.css';
import React, {Fragment} from "react";
import { Routes, Route } from "react-router-dom";
import PuzzlePage from './components/PuzzlePage';
import Puzzle1 from './components/Puzzle1';
import Welcome from './components/Welcome'

function App() {

  return (
    <>
    <Routes>
        <Route
          path="/"
        />
        <Route path="/musicians/:id" element={<PuzzlePage />} />

        <Route
          path="/leaders/:id"
        />
  
    </Routes>
</>
  );
}

export default App;