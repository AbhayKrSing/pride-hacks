import './App.css';

import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import PuzzlePage from './components/PuzzlePage';
// import Puzzle1 from './components/Puzzle1';
import Welcome from './components/Welcome'

function App() {
  // Change font-family on scroll
  useEffect(() => {

    window.addEventListener("scroll", function () {
      const body = document.querySelector("body");
      const header = document.querySelector("header");

      if (window.scrollY > header.offsetHeight) {
        body.classList.add("scrolled");
      } else {
        body.classList.remove("scrolled");
      }
    });

  }, [])

  return (
    <>

      <Routes>
        <Route
          path="/" element={<Welcome />}
        />
        <Route path="/musicians/:id" element={<PuzzlePage />} />

        <Route
          path="/leaders/:id"
        />

      </Routes>
    </>
  );
}

export default App;