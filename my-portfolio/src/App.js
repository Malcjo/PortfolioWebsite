import React from "react";
import About from './components/About';
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

//style = {{backgroundImage: 'url(./landscape.jpg)'}}
export default function App() {
  return (
    <main className="bg-fixed bg-center bg-cover bg-no-repeat bg-opacity-70 text-gray-400 bg-blue-700 body-font"
    style = {{backgroundImage: 'url(./landscape.jpg)', height: 'auto',}}>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      {/*<Testimonials />*/}
      {/*<Contact />*/}
    </main>
  );
}
