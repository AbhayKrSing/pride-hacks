
import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Puzzle1 from './components/Puzzle1';
import Welcome from './components/Welcome'
function App() {

  return (
    <>
      <div className="App">
        <Routes>
          <Route path='/puzzle' element={<Puzzle1 />} />
          <Route path='/' element={<Welcome />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;