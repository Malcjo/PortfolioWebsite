
import React from "react";
export default function About(){
    return (
        <section id = "about" className=" bg-opacity-100 bg-gradient-to-b from-twilight-900  via-twilight-900">
            <div className="container mx-auto flex  py-20 md:flex-row flex-col items-center w-full co">
                <div className="   lg:pr-10 md:pr-5 lg:px-40 lg:w-100
                flex flex-col md:items-start md:text-left mb-28 md:mb-0 
                content-center px-10">
                    <h1 className="title-font sm:text=4xl text-3xl  font-medium text-white">
                        Hi I'm Josh.
                    </h1>

                    <h1 className="text-gray-200 text-xl mb-4">
                        
                        I love being creative and curious about the world
                    </h1>
                    <br className=" lg:inline-block " />
                    <p className="mb-8 leading-relaxed text-blue-200">
                        I'm Joshua Malcolm
                        <br />
                        I have a level 7 diploma in Video Game Art and Development and a Masters in Software Developement
                        <br />
                        I'm a Software and Video Game Developer looking to find a place in the Game development Industry
                        <br />
                        I enjoy exploring about Game design, Philosophy, Psychology, mental health, and being creative.

                    </p>
                    <div className="">
                        <div className="my-2 py-5">
                            <a href="https://github.com/Malcjo" 
                            className="rounded-2xl py-5 px-5 border-4
                            text-blue-400 hover:text-white 
                            bg-gray-800 border-gray-900
                              hover:bg-gray-700">
                                Github
                            </a>
                        </div>
                        <div className="my-2 py-5">
                            <a href="https://www.instagram.com/joshuaericmalcolm/" 
                            className="rounded-2xl py-5 px-5 border-4 
                            text-blue-400 hover:text-white 
                            bg-gray-800 border-gray-900
                              hover:bg-gray-700">
                                Instagram
                            </a>
                        </div>
                    </div>

                </div>
                <div className="lg:max-w-md lg:w-full md:w-1/2 w-2/5 content-center">
                    <img
                        className="border-4 border-gray-800 object-cover object-center rounded-3xl opacity-70 "
                        alt="my painting"
                        src="./void.jpg"
                    />
                </div>
            </div>
        </section>
    );
}


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

    {/*            <div className="container bg-opacity-100 bg-gradient-to-b from-twilight-900  via-twilight-900
            mx-auto flex px-10 py-20 md:flex-row flex-col items-center w-full">
                <div className="  lg:flex-grow  lg:pr-24 md:pr-16 
                flex flex-col md:items-start md:text-left mb-26 md:mb-0 items-center text-center">*/}