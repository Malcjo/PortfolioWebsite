import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/Pages/About';
import Home from './components/Pages/Home';
import Navbar from "./components/Navbar";
import Projects from "./components/Pages/Projects";
import Skills from "./components/Pages/Skills";
import WebDev from "./components/Pages/ProjectComponents/WebDev";
//import SoftwareDev from "./components/Projects/SoftwareDev";
import GameDev from "./components/Pages/ProjectComponents/GameDev";
import ArtProjects from "./components/Pages/ProjectComponents/ArtProjects";
//import OtherProjects from "./components/Projects/OtherProjects";

//<main className="bg-fixed bg-center bg-cover bg-no-repeat bg-opacity-70 text-gray-400 bg-twilight-700 body-font body-font min-h-screen"
/*
        <main className="relative text-gray-400 body-font min-h-screen"
        style = {{backgroundImage: 'url(./landscape.jpg)', height: 'auto',}}>
*/
//className=" bg-opacity-100 bg-gradient-to-b from-twilight-900  via-twilight-900"
//style = {{backgroundImage: 'url(./landscape.jpg)'}}
export default function App() {
  return (
    <Router>
      <Navbar />
      <main className="relative text-gray-400 body-font min-h-screen">
        
        {/* Background image */}
        <div 
          className="bg-fixed bg-center bg-cover bg-no-repeat absolute inset-0 z-0" 
          style={{ backgroundImage: 'url(/landscape.jpg)' }} 
        />
        
        {/* Gradient fade at the top and bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-twilight-900 via-transparent to-twilight-900 z-10"></div>
        
        {/* Content */}
        <div className="relative z-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/webdev" element={<WebDev />} />
            <Route path="/projects/gamedev" element={<GameDev />} />
            <Route path="/projects/artprojects" element={<ArtProjects />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </div>
        
      </main>
    </Router>
  );
}
