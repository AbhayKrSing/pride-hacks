import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css'
import './puzzle.css';

import CondRender from "./CondRender";

function PuzzlePage() {    
  const [animationClass, setAnimationClass] = useState('');
    const params = useParams();    
    const navigate = useNavigate();
    console.log(params);
    let nextId = Number(params.id) + 1;

    // hooks
    useEffect(() => {
        const timeout = setTimeout(() => {
        setAnimationClass('animate-text');
        }, 500);
        nextId = Number(params.id) + 1;
        console.log(nextId);
        return () => clearTimeout(timeout);
    }, [params]);

    return(
        <>  
        <header></header>

        <CondRender />
        
        <div className="navButtons h-[15vh] text-center space-x-2 mt-5">
            <button style={{fontSize: "24px", padding: "10px 20px", backgroundColor: "#f44336", color: "#fff", border: "none", borderRadius: "5px", boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)"}} 
                onClick={() => navigate(`/`)}>Home
            </button>

        { params.id < 7 ? <button style={{fontSize: "24px", padding: "10px 20px", backgroundColor: "#f44336", color: "#fff", 
            border: "none", borderRadius: "5px", boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)"}} 
            onClick={ ()=> navigate(`/musicians/${nextId}`)}>Next</button> : null }     
        </div>
        </>
    )
}
    
export default PuzzlePage;