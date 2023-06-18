
import React, { useState} from "react";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import img from '../lib/images/frank-ocean.jpg';
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css'
import './puzzle.css';
import SpotifyPlayer from 'react-spotify-player';
import { songURIs } from "../songUris";
import { musicians } from "../musiciansHelper";


function Puzzle1() {
    const [solveText, setSolveText] = useState("unscramble the puzzle");
   
    const [isSolved, setSolved] = useState(false);

    const params = useParams();    
    let nextId;
    let musician=musicians[params.id-1];
    const navigate = useNavigate();

    function puzzleSolved() {
        setSolveText("You got it!");
        setSolved(true);
    }

    useEffect(() => {
        nextId = Number(params.id) + 1;

        setSolved(false);
    }, [params])
    
    // const size = {
    //     width: '100%',
    //     height: 300,
    //     };
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
                <p>Frank Ocean is  is an American singer, songwriter, and rapper. His works are noted by music critics for 
                    featuring avant-garde styles and introspective, elliptical lyrics. He has won two Grammy Awards
                     and a Brit Award for International Male Solo Artist among other accolades, 
                    and his two studio albums have been listed on Rolling Stone's 500 Greatest Albums of All Time (2020). 
                </p>
                <SpotifyPlayer
                uri={musician}
                size="compact"
                view={view}
                theme={theme}
                />

            </div>
            <div className="navButtons">
                <button>Next</button>
                <button>Home</button>
            </div>
        </>
    )
}
    

export default Puzzle1;