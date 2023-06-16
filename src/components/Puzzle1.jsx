
import React, { useState } from "react";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import img from '../lib/images/frankie-knuckles.jpeg';
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css'
function Puzzle1() {
    const [solveText, setSolveText] = useState("unscramble the puzzle");

    const setText = () => (setSolveText("You got it!"));
  
    return(
        <>
            <JigsawPuzzle
            imageSrc={img}
            rows={3}
            columns={3}
            onSolved={setText}
            className="jigsaw-puzzle"
            />
        </>
    )
}
    

export default Puzzle1;