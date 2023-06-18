import './App.css';
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import PuzzlePage from './components/PuzzlePage';
import axios from 'axios'
// import Puzzle1 from './components/Puzzle1';
import Welcome from './components/Welcome'
// import { Configuration, OpenAIApi } from 'openai';
// const openai = new OpenAIApi(new Configuration({
//   apiKey: process.env.REACT_APP_API_KEY
// }))
// function AI() {
//   openai.createChatCompletion({
//     model: 'gpt-3.5-turbo',
//     messages: [{ role: 'user', content: 'Hello Chatgpt' }]
//   }).then((res) => {
//     console.log(res.data.choices)
//   })
// }
function App() {
  // Change font-family on scroll
  // axios.get()
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
    axios.get('http://localhost:5000/ai').then((res) => {
      console.log(res.data)
    })
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