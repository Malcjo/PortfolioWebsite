import React from "react";
import { projects } from "../../../ArtProjectsData";

export default function ArtProjects() {

  return (
    <section className="text-gray-400 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Art Projects
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <div key={project.title} className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <div className="px-4 py-5 relative z-10 w-full border-4 border-gray-800 bg-gray-900">
                  <img alt="gallery" className="container px-20" src={project.image} />
                  <h2 className="tracking-widest text-sm title-font font-medium text-gray-500 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed text-blue-200">{project.description}</p>
                  <a href={project.link} className="text-blue-400 text-wrap hover:text-white" target="_blank" rel="noopener noreferrer">{project.title} link</a>
                  <br />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
