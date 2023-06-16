
import './App.css';
import React, { useState } from "react";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import img from './lib/images/frankie-knuckles.jpeg';
import Puzzle1 from './components/Puzzle1';

function App() {
  const [solveText, setSolveText] = useState("unscramble the puzzle");

  const setText = () => (setSolveText("You got it!"));

  return (
    <>
    <div className="App">

      <Puzzle1 />
    </div>
    </>
  );
}

export default App;