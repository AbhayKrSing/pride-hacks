
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import img from '../lib/images/frankie-knuckles.jpeg';
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css'
import './puzzle.css';
import SpotifyPlayer from 'react-spotify-player';
import { musicians } from "../musiciansHelper";

function PuzzlePage() {    

    const params = useParams();    
    console.log('params', params.id);
    let nextId = Number(params.id) + 1;
    console.log(nextId);
    const navigate = useNavigate();

    // hooks
    const [solveText, setSolveText] = useState("unscramble the puzzle");
    const [isSolved, setSolved] = useState(false);

    useEffect(() => {
        console.log('params', params);
        
        console.log(nextId); 
    }, [params])

    // functions
    function puzzleSolved() {
        setSolveText("You got it!");
        setSolved(true);
    }

    // spotify player props
    const size = {
        width: '100%',
        height: 300,
        };
        const view = 'coverart'; // or 'list'
        const theme = 'black'; // or 'white'

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
                <SpotifyPlayer
                uri={musicians[nextId]}
                size="compact"
                view={view}
                theme={theme}
                />
            </div>
            <div className="navButtons">
                <button onClick={ ()=> navigate(`/musicians/${nextId}`)}>Next</button>
                <button onClick={ ()=> navigate(`/`)}>Home</button>
            </div>
        </>
    )
}
    
export default PuzzlePage;