import {CodeIcon} from "@heroicons/react/solid";
import React from "react";
import {projects} from "../data";

export default function Projects(){
    return (
        <section id = "projects" className="text-gray-400  body-font
        bg-gradient-to-b from-transparent via-twilight-900 via-80% to-twilight-900 to-90%">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                {/* Title section for projects */}
                <div className="flex flex-col w-full mb-20">
                    <CodeIcon className="mx-auto inline-block w-10 mb-4"></CodeIcon>
                    <h1 className="sm:text-4xl text text-3xl font-medium title-font mb-4 text-white">
                        Projects I've worked on
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-blue-200">
                        Here are a few of my projects I've worked/ working
                    </p>
                </div>
                {/* Section where displaying projects*/}
                <div className="flex flex-wrap -m-4">
                    {projects.map((project) => (
                        <div className="sm:w-1/2 w-100 p-4">
                            <div className="flex relative">

                                <div className="px-4 py-5 relative z-10 w-full border-4 border-gray-800 bg-gray-900 ">
                                    <img
                                        alt="gallery"
                                        className="container px-20"
                                        src={project.image}
                                    />
                                    {/*absolute inset-0 w-full h-full object-cover object-center */}
                                    <h2 className="tracking-widest text-sm title-font font medium text-gray-500 mb-1">
                                        {project.subtitle}
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-white mb-3">
                                        {project.title}
                                    </h1>
                                    <p className="leading-relaxed text-blue-200">
                                        {project.description}
                                    </p>
                                    <a href={project.link}
                                        className="text-blue-400 text-wrap hover:text-white">
                                        {project.title} link
                                    </a>
                                    <br />
                                    <a href={project.github}
                                        className="text-blue-400 text-wrap hover:text-white">
                                        {project.title} Github
                                    </a>
                                </div>
                            </div>
                            </div>
                    ))}
                </div>
            </div>
        </section>
    );
}