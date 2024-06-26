import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar(){
    return (
        <header className="bg-twilight-900 md:sticky top-0 z-50 object-cover">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="title-font font-medium text-white mb-4 md:mb-0">
                    <a href="#about" className="ml-3 text-xl">
                        Josh Malcolm
                    </a>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-1 md:border-gray-700
                flex flex-wrap items-center text-base justify-center">
                    <a href="#projects" className="mr-5 text-blue-400 hover:text-white hover:bg-twilight-800">
                        Projects
                    </a>
                    <a href="#skills" className="mr-5 text-blue-400 hover:text-white hover:bg-twilight-800">
                        Skills
                    </a>
                    <a href="https://github.com/Malcjo" className="mr-5 text-blue-400 hover:text-white hover:bg-twilight-800">
                        Github
                    </a>
                    <a href="https://www.instagram.com/joshuaericmalcolm/" className="mr-5 text-blue-400 hover:text-white hover:bg-twilight-800">
                        Instagram
                    </a>
                </nav>



                {/*<a
                href = "#contact"
                className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                    Contact Me
                    <ArrowRightIcon className="w-4 h-4 ml-1"></ArrowRightIcon>
    </a>*/}
            </div>
        </header>
    );
}