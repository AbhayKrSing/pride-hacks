import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css'
import './puzzle.css';
import SpotifyPlayer from 'react-spotify-player';
import { musicians } from "../musiciansURIHelper";
import img1 from '../lib/images/frankie-knuckles.jpeg';
import img2 from '../lib/images/frank-ocean.jpg';
import img3 from '../lib/images/tracy-chapman.jpg';
import img4 from '../lib/images/prince.jpg';
import img7 from '../lib/images/sza.jpg'
import img5 from '../lib/images/queen-freddie-mercury.jpg';
import img6 from '../lib/images/lil-nas-x.jpg';

function CondRender() {

    const params = useParams();    
    console.log(params);
    let nextId;
    let musician=musicians[params.id-1];

        // hooks
        const [solveText, setSolveText] = useState("Unscramble the puzzle to hear their music!");
        const [isSolved, setSolved] = useState(false);
        const [animationClass, setAnimationClass] = useState('');

        useEffect(() => {
            nextId = Number(params.id) + 1;
            console.log('next id:', nextId);
            setSolved(false);
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
 
    if ( params.id === '1') {
        return (
            <>
                <h2 style={{fontSize: "36px", color: "#333", 
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)", textAlign:'center'}}>
                {solveText}
                </h2>
                <div className="puzzle-container">
                <JigsawPuzzle
                    imageSrc={img1}
                    rows={3}
                    columns={3}
                    onSolved={()=>puzzleSolved()}
                    className="jigsaw-puzzle" /> 
                <div className={isSolved?"solvedMessage shown":"solvedMessage hidden"}>
                <p
                    className={`animated-text ${animationClass}`}
                    style={{
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '16px',
                    color: '#333',
                    }}
                    >Frankie Knuckles is often labeled as the father of house music, 
                        named after Chicago club the Warehouse, where Knuckles played regularly since 1977.
                </p>
                <SpotifyPlayer
                uri={musician}
                size="compact"
                view={view}
                theme={theme}
                />
                </div>
            </div>
            </>)
    }
    else if (params.id === '2' ) {
        return (
            <>
            <h2 style={{fontSize: "36px", color: "#333", 
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)", textAlign:'center'}}>
                {solveText}
            </h2>
            <div className="puzzle-container" >
            <JigsawPuzzle
            imageSrc={img2}
            rows={3}
            columns={3}
            onSolved={()=>puzzleSolved()}
            className="jigsaw-puzzle" /> 
        <div className={isSolved?"solvedMessage shown":"solvedMessage hidden"}>
        <p
            className={`animated-text ${animationClass}`}
            style={{
            fontFamily: 'Arial, sans-serif',
            fontSize: '16px',
            color: '#333',
            }}
        >Frank Ocean is  is an American singer, songwriter, and rapper. His works are noted by music critics for 
    featuring avant-garde styles and introspective, elliptical lyrics. He has won two Grammy Awards
        and a Brit Award for International Male Solo Artist among other accolades, 
    and his two studio albums have been listed on Rolling Stone's 500 Greatest Albums of All Time (2020). 
        </p>
        <SpotifyPlayer
        uri={musician}
        size="compact"
        view={view}
        theme={theme} />
        </div>
    </div>
    </>)
    } else if (params.id === '3') {
        return (
        <>
        <h2 style={{fontSize: "36px", color: "#333", 
        textShadow: "2px 2px 4px rgba(0,0,0,0.5)", textAlign:'center'}}>
        {solveText}
        </h2>
        <div className="puzzle-container">
        <JigsawPuzzle
        imageSrc={img3}
        rows={3}
        columns={3}
        onSolved={()=>puzzleSolved()}
        className="jigsaw-puzzle" /> 
        <div className={isSolved? "solvedMessage shown":"solvedMessage hidden"}>
        <p
            className={`animated-text ${animationClass}`}
            style={{
            fontFamily: 'Arial, sans-serif',
            fontSize: '16px',
            color: '#333',
            }}
            > Tracy Chapman is an American singer-songwriter and guitarist. She is best known for her self-titled debut album, which was released in 1988. 
        qOver the course of her career Tracy Chapman has won numerous awards including four Grammy Awards and four MTV Video Music Awards.
            She was also inducted into the Rock & Roll Hall of Fame in 2005. Tracy Chapman continues to tour and perform around the world.
        </p>
        <SpotifyPlayer
        uri={musician}
        size="compact"
        view={view}
        theme={theme}
        />
        </div>
    </div>
    </>
    )} else if (params.id > '6') {
        return (
            <>
            <h1 className="text-6xl font-bold mb-4 change-font-family">You completed all the Puzzles!</h1>
            </>
        )
    } else if (params.id === '4') {
        return (
            <>
        <h2 style={{fontSize: "36px", color: "#333", 
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)", textAlign:'center'}}>
            {solveText}
        </h2>
        <div className="puzzle-container">
        <JigsawPuzzle
        imageSrc={img4}
        rows={3}
        columns={3}
        onSolved={()=>puzzleSolved()}
        className="jigsaw-puzzle" /> 
        <div className={isSolved?"solvedMessage shown":"solvedMessage hidden"}>
            <p>

            </p>
        <SpotifyPlayer
        uri={musician}
        size="compact"
        view={view}
        theme={theme}
        />
        </div>
    </div>
    </>)
    } else if (params.id === '5') {
        return (
        <>
        <h2 style={{fontSize: "36px", color: "#333", 
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)", textAlign:'center'}}>
                {solveText}
        </h2>
        <div>
        <JigsawPuzzle
        imageSrc={img5}
        rows={3}
        columns={3}
        onSolved={()=>puzzleSolved()}
        className="jigsaw-puzzle" /> 
        <div className={isSolved?"solvedMessage shown":"solvedMessage hidden"}>
            <p>          </p>
        <SpotifyPlayer
        uri={musician}
        size="compact"
        view={view}
        theme={theme}
        />
        </div>
    </div>
    </>)
    } else if (params.id === '6') {
        return (
        <>
        <h2 style={{fontSize: "36px", color: "#333", 
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)", textAlign:'center'}}>
            {solveText}
            </h2>
        
        <div>
        <JigsawPuzzle
        imageSrc={img6}
        rows={3}
        columns={3}
        onSolved={()=>puzzleSolved()}
        className="jigsaw-puzzle" /> 
        <div className={isSolved?"solvedMessage shown":"solvedMessage hidden"}>
            <p>      </p>
        <SpotifyPlayer
        uri={musician}
        size="compact"
        view={view}
        theme={theme}
       />
         </div>
    </div>
    </>) 
        
}
}

export default CondRender;