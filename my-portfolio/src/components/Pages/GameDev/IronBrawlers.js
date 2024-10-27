// IronBrawlers.js
import React from "react";
import ContentPost from "../ProjectComponents/ContentPost"
import { useNavigate } from "react-router-dom";
import BackButton from "../ProjectComponents/BackButton";

export default function IronBrawlers() {
    const navigate = useNavigate();
    return (
        <section className="text-gray-400">
            <BackButton />

            <div >
                <div className="container mx-auto px-5 py-10 lg:px-40">

                    <h1 className="text-4xl font-bold text-white mb-8">Iron Brawlers</h1>
                    {/* You can use the ContentPost component multiple times to build out the page */}
                    <div >
                        <div >
                            <div className="flex flex-col items-center relative z-10 w-full border-4 border-gray-800 bg-gray-900 hover:bg-gray-800 transition-colors duration-300 p-5">
                                <div className="flex flex-row text-center">
                                    <ContentPost
                                        title="Project Overview"
                                        image="/Images/gamedev/IronBrawlersImages/titleImage.png"
                                        description="This was a 6 month class group project. there were including me in my group, 3 artists, and me as the programmer. Our goal was to make a platform brawler, inspired by games like Super Smash Brothers using the Unity Game Engine. Going in I was aware of the difficulties of creating such a project but I knew it would push me and teach me a lot. For this project, I learnt about creating a state machine to handle the player's states and interactions. I really enjoyed the creative process of designing the game with my group and problem solving to create the demo."
                                    />
                                </div>
                            </div>
                            <br />
                            <div className="flex flex-col items-center relative z-10 w-full border-4 border-gray-800 bg-gray-900 hover:bg-gray-800 transition-colors duration-300 p-5">
                                <div className="flex flex-row items-center">
                                    <ContentPost
                                        title="idle animation for one of the characters flowerBoi"
                                        image="/Images/gamedev/IronBrawlersImages/Iron-Brawlers.gif"
                                        description="Just putting this gif here while I'm managing what to actually put here and also experimenting with layout. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nulla facilisi. Proin vehicula."
                                    />
                                </div>
                                <div className="flex flex-row justify-center space-x-4 mt-4">
                                    <ContentPost
                                        image="/Images/gamedev/IronBrawlersImages/Iron-Brawlers.gif"
                                    />
                                    <ContentPost
                                        image="/Images/gamedev/IronBrawlersImages/Iron-Brawlers.gif"
                                    />
                                    <ContentPost
                                        image="/Images/gamedev/IronBrawlersImages/Iron-Brawlers.gif"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    );
}
