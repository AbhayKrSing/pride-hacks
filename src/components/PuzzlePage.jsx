import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import img from '../lib/images/frankie-knuckles.jpeg';
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css'
import './puzzle.css';
import SpotifyPlayer from 'react-spotify-player';
// import { musicians } from "../musiciansHelper";

function PuzzlePage() {    

    const params = useParams();    
    console.log(params);
    let nextId;
    const navigate = useNavigate();

    // hooks
    const [solveText, setSolveText] = useState("Unscramble the puzzle");
    const [isSolved, setSolved] = useState(false);

    useEffect(() => {
        nextId = Number(params.id) + 1;
        console.log(nextId);
    }, [params])

    // functions
    function puzzleSolved() {
        setSolveText("You got it!");
        setSolved(true);
    }

    // spotify player props
    // const size = {
    //     width: '100%',
    //     height: 300,
    //     };
        const view = 'coverart'; // or 'list'
        const theme = 'black'; // or 'white'

    return(
        <>  <header></header>
           <h2 style={{fontSize: "36px", color: "#333", textShadow: "2px 2px 4px rgba(0,0,0,0.5)",textAlign:'center'}}>{solveText}</h2>
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
                uri="spotify:track:0vryyKyxCFXT0gg670yNEw"
                size="compact"
                view={view}
                theme={theme}
                />
            </div>
            <div className="navButtons h-[15vh] text-center space-x-2 mt-5">
             <button style={{fontSize: "24px", padding: "10px 20px", backgroundColor: "#f44336", color: "#fff", border: "none", borderRadius: "5px", boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)"}} onClick={() => navigate(`/`)}>Home</button>

                <button style={{fontSize: "24px", padding: "10px 20px", backgroundColor: "#f44336", color: "#fff", border: "none", borderRadius: "5px", boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)"}} onClick={ ()=> navigate(`/musicians/${nextId}`)}>Next</button>
            </div>
        </>
    )
}
    
export default PuzzlePage;