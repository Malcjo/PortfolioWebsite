
import React from "react";
export default function About(){
    return (
        <section id = "about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-26 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text=4xl text-3xl mb-4 font-medium text-white">
                    Hi I'm Josh.
                    <br className="hidden lg:inline-block"/> 
                    I love be curious about the world and be creative
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I'm Joshua Malcolm, I have a level 7 diploma in Video Game Art and Development and a Masters in Software Developement
                        I'm a Software and Video Game Developer looking to find a place in the Game development Industry
                        I enjoy learning about Game development theory, Philosophy, Psychology, and being creative.
                        I have a passion for mental health and learning about others and the world I live in.
                    </p>
                    <p>
                        My Github:
                        <a href="https://github.com/Malcjo" className="text-blue-400"> https://github.com/Malcjo
                        </a>
                    </p>
                    {/*<div className="flex justify-center">
                        <a 
                        href="#contact"
                        className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-400 rounded text-lg">
                            Contact Me
                        </a>
                        <a 
                        href="#projects"
                        className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            My Projects
                        </a>
    </div>*/}
                </div>
                <div className="lg:max-w-md lg:w-full md:w-1/2 w-2/5">
                    <img
                        className="border-4 border-gray-800 object-cover object-center rounded-3xl opacity-50 "
                        alt="hero"
                        src="./void.jpg"
                    />
                </div>
            </div>
        </section>
    );
}