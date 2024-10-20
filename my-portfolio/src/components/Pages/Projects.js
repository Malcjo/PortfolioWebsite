import React from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <section className="text-gray-400 body-font">
      <div className="container mx-auto px-5 sm:px-4 md:px-8 lg:px-16 xl:px-24 py-10  text-center">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects
          </h1>
        </div>

        {/* Sub Navbar */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Link to="/projects/webdev" className="px-4 py-2 bg-gray-800 text-blue-400 hover:text-white">Web Development</Link>
          <Link to="/projects/softwaredev" className="px-4 py-2 bg-gray-800 text-blue-400 hover:text-white">Other Software Development</Link>
          <Link to="/projects/gamedev" className="px-4 py-2 bg-gray-800 text-blue-400 hover:text-white">Game Development</Link>
          <Link to="/projects/artworks" className="px-4 py-2 bg-gray-800 text-blue-400 hover:text-white">Art Projects</Link>
          <Link to="/projects/otherprojects" className="px-4 py-2 bg-gray-800 text-blue-400 hover:text-white">Other Projects</Link>
        </div>
      </div>
    </section>
  );
}
