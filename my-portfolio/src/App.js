import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

//style = {{backgroundImage: 'url(./landscape.jpg)'}}
export default function App() {
  return (
    <Router>
      <Navbar />
      <main className="bg-fixed bg-center bg-cover bg-no-repeat bg-opacity-70 text-gray-400 bg-twilight-700 body-font"
      style = {{backgroundImage: 'url(./landscape.jpg)', height: 'auto',}}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />}/>
        </Routes>
      </main>
    </Router>
  );
}
