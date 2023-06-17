
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import { mtImage } from "../test";
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css'
import './puzzle.css';
import SpotifyPlayer from 'react-spotify-player';
import { musicians } from "../musiciansHelper";
// import img from '../lib/images/frankie-knuckles.jpeg';


function PuzzlePage() {    

    const params = useParams();    
    let nextId;
    let musician=musicians[params.id-1];
    const navigate = useNavigate();
    nextId = Number(params.id) + 1;
    let img = mtImage[params.id].toString();
    console.log(typeof(img))

    // hooks
    const [solveText, setSolveText] = useState("unscramble the puzzle");
    const [isSolved, setSolved] = useState(false);

    useEffect(() => {
        // nextId = Number(params.id) + 1;
        // img = mtImage[nextId];

        setSolved(false);
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
            // imageSrc={require(`../lib/images/frank-ocean.jpg`)}
            imageSrc={ require( `${img}` )}

            rows={3}
            columns={3}
            onSolved={()=>puzzleSolved()}
            className="jigsaw-puzzle" /> 
            <div className={isSolved?"solvedMessage shown":"solvedMessage hidden"}>
                <p>Frankie Knuckles is often labeled as the father of house music, 
                    named after Chicago club the Warehouse, where Knuckles played regularly since 1977.
                </p>
                <SpotifyPlayer
                uri={musician}
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