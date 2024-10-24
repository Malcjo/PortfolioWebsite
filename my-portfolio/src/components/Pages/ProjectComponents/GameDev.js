import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../../../GameDevData";
import BackButton from "./BackButton";

export default function GameDev() {
  return (
    <section className="text-gray-400 ">
      <BackButton />
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Game Development Projects
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <div key={project.title} className="sm:w-1/2 w-100 p-4">
              <div className="flex relative z-10 w-full border-4 border-gray-800 bg-gray-900 hover:bg-gray-800 transition-colors duration-300">
                <div className="px-4 py-5 w-full">
                  {/* Wrapping the entire card in a Link */}
                  <Link to={`/projects/gamedev/${project.title.toLowerCase().replace(/\s+/g, '')}`}>
                    {/* Image */}
                    <img alt={project.title} className="container px-20 mb-4" src={project.image} />
                    
                    {/* Title and Subtitle */}
                    <h2 className="tracking-widest text-sm title-font font-medium text-gray-500 mb-1">
                      {project.subtitle}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      {project.title}
                    </h1>
                    
                    {/* Description */}
                    <p className="leading-relaxed text-blue-200">{project.description}</p>
                </Link>
                <br/>
                <div>
                  {/* Link to project if hosted */}
                  <a href={project.link} className="text-blue-400 text-wrap hover:text-white" target="_blank" rel="noopener noreferrer">{project.title} link</a>
                  <br />
                  {/* link to project github if uploaded*/}
                  <a href={project.github} className="text-blue-400 text-wrap hover:text-white" target="_blank" rel="noopener noreferrer">{project.title} Github</a>
                </div>
                </div>

              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
