
import React, { useState, useEffect } from "react";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import img from '../lib/images/frankie-knuckles.jpeg';
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css'
import './puzzle.css';


function Puzzle1() {
    const [solveText, setSolveText] = useState("unscramble the puzzle");
   
    const [isSolved, setSolved] = useState(false);
  
    const [token, setToken] = useState('');

    useEffect(() => {
  
      async function getToken() {
        const response = await fetch('/auth/token');
        const json = await response.json();
        setToken(json.access_token);
      }
  
      getToken();
    }, []);

    function puzzleSolved() {
        setSolveText("You got it!");
        setSolved(true);
    }

    // function showSolution() {
    //     return JigsawPuzzle.onSolutionButton()
    // }

    return(
        <>
            <h2>{solveText}</h2>
            <JigsawPuzzle
            imageSrc={img}
            rows={3}
            columns={3}
            onSolved={()=>puzzleSolved()}
            className="jigsaw-puzzle"
            />
            {/* <button onClick={showSolution()}>Show Solution</button> */}
            <div className={isSolved?"solvedMessage shown":"solvedMessage hidden"}>
                <p>Frankie Knuckles is often labeled as the father of house music, 
                    named after Chicago club the Warehouse, where Knuckles played regularly since 1977.
                </p>

            </div>
        </>
    )
}
    

export default Puzzle1;