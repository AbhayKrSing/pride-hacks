import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import img from '../lib/images/frankie-knuckles.jpeg';
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css'
import './puzzle.css';
import SpotifyPlayer from 'react-spotify-player';
// import { musicians } from "../musiciansHelper";

function PuzzlePage() {    
  const [animationClass, setAnimationClass] = useState('');
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
 useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimationClass('animate-text');
    }, 500);

    return () => clearTimeout(timeout);
  }, []);
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
                <div
      style={{
        backgroundColor: '#f5f5f5',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <p
        className={`animated-text ${animationClass}`}
        style={{
          fontFamily: 'Arial, sans-serif',
          fontSize: '16px',
          color: '#333',
        }}
      >
        Frankie Knuckles, born Francis Nicholls (January 18, 1955 – March 31, 2014), was an American DJ, record producer, and remixer. He is often referred to as the "Godfather of House Music" due to his pioneering work in popularizing the genre.

Knuckles was born in The Bronx, New York, and later moved to Chicago in the late 1970s. It was in Chicago where he made a significant impact on the music scene and helped shape the sound of house music. In the early 1980s, he became the resident DJ at the Warehouse, a club where he would experiment with mixing disco and European electronic music with drum machines, synthesizers, and other electronic instruments. This fusion eventually led to the creation of what became known as house music.

Knuckles' remixes and productions played a crucial role in the success of many artists and tracks. He worked with notable artists such as Michael Jackson, Whitney Houston, Luther Vandross, Diana Ross, and Chaka Khan, among others. Some of his most famous remixes include "The Whistle Song" by Frankie Knuckles and "Tears" by Robert Owens.

In 1997, Knuckles won a Grammy Award for Remixer of the Year, Non-Classical, recognizing his exceptional talent and contribution to the music industry. He continued to perform and produce music throughout his career and remained an influential figure in the global dance music community.

Frankie Knuckles passed away on March 31, 2014, at the age of 59 due to complications from diabetes. His legacy as a pioneer of house music and his contributions to the electronic music genre continue to be celebrated and recognized to this day.
      </p>
    </div>  
    <div className="text-center">
                <SpotifyPlayer
                uri="spotify:track:0vryyKyxCFXT0gg670yNEw"
                size="compact"
                view={view}
                theme={theme}
                />
    </div>
            </div>
            <div className="navButtons h-[15vh] text-center space-x-2 mt-5">
             <button style={{fontSize: "24px", padding: "10px 20px", backgroundColor: "#f44336", color: "#fff", border: "none", borderRadius: "5px", boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)"}} onClick={() => navigate(`/`)}>Home</button>

                <button style={{fontSize: "24px", padding: "10px 20px", backgroundColor: "#f44336", color: "#fff", border: "none", borderRadius: "5px", boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)"}} onClick={ ()=> navigate(`/musicians/${nextId}`)}>Next</button>
            </div>
        </>
    )
}
    
export default PuzzlePage;