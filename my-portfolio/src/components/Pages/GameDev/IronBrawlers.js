// IronBrawlers.js
import React from "react";
import ContentPost from "../ProjectComponents/ContentPost"
import { useNavigate } from "react-router-dom";
import BackButton from "../ProjectComponents/BackButton";
import { Link } from "react-router-dom";

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
                            <div className="flex flex-col items-center relative z-10 w-full border-4 border-gray-800 bg-gray-900 ">

                                <div className="flex flex-row text-center pt-8">
                                    <ContentPost
                                        title="Project Overview"
                                    />
                                </div>
                                <div className="flex flex-row justify-center space-x-4">
                                    <div className="rounded border-2 border-twilight-700 px-4 text-blue-400 hover:text-white hover:bg-twilight-800 bg-twilight-900">
                                        <Link to="https://iron-brawlers.itch.io/iron-brawlers-alpha-test-version">
                                            Itch.io Page
                                        </Link>
                                    </div>
                                    <div className="rounded border-2 border-twilight-700 px-4 text-blue-400 hover:text-white hover:bg-twilight-800 bg-twilight-900">
                                        <Link to="https://github.com/Malcjo/Iron-Brawlers-2">
                                            Github Page
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex flex-row text-center py-4">
                                    <ContentPost
                                        image="/Images/gamedev/IronBrawlersImages/titleImage.png"
                                        description="This was a 6 month class group project. there were including me in my group, 3 artists, and me as the programmer. Our goal was to make a platform brawler, inspired by games like Super Smash Brothers using the Unity Game Engine. Going in I was aware of the difficulties of creating such a project but I knew it would push me and teach me a lot. For this project, I learnt about creating a state machine to handle the player's states and interactions. I really enjoyed the creative process of designing the game with my group and problem solving to create the demo."
                                    />
                                </div>

                            </div>
                            <br />
                            <div
                                className="flex flex-col items-center relative z-10 w-full border-4 border-gray-800 bg-gray-900 p-5"
                            >
                                <br />
                                <ContentPost
                                    title="Brief description of Iron-Brawlers"
                                    description="Iron Brawlers is a brutal world where you are defined by the armour on your chest and strength of your fist. 2 heavily armoured characters punch each other until one is knocked off into the void. Your weight, strength, speed, and defence is determined by how much armour you have. Like classic platform fighters the aim of this game will be to take all the lives of the other player by knocking them off the stage."
                                />
                                <div className="flex flex-row justify-center space-x-4 mt-4">
                                    <ContentPost
                                        image="/Images/gamedev/IronBrawlersImages/spinattack.gif"
                                    />
                                    <ContentPost
                                        image="/Images/gamedev/IronBrawlersImages/albowattack.gif"
                                    />
                                </div>

                            </div>
                            <br />
                            <div className="flex flex-col items-center relative z-10 w-full border-4 border-gray-800 bg-gray-900 p-5">
                                <br />
                                <ContentPost
                                    title="Games and mechanics that inspired Iron-Brawlers"
                                    description="Mario kars character select for navigation and character select. the quick and dynamic gamep[lay from smash bros and nidhogg. and the armor fighting mechanic from zelda twilight princess with the darknut fight."

                                />
                                <div className="flex flex-row justify-center space-x-4 mt-4">
                                    <ContentPost
                                        title="Mario Kart"
                                        image="/Images/gamedev/IronBrawlersImages/mariokart.png"
                                    />
                                    <ContentPost
                                        title="nidhigg"
                                        image="/Images/gamedev/IronBrawlersImages/nidhogg.gif"
                                    />
                                </div>
                                <div className="flex flex-row justify-center space-x-4 mt-4">
                                    <ContentPost
                                        title="smash bros melee"
                                        image="/Images/gamedev/IronBrawlersImages/smashbros.gif"
                                    />
                                    <ContentPost
                                        title="zelda twilight princess"
                                        image="/Images/gamedev/IronBrawlersImages/zelda.gif"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col items-center relative z-10 w-full border-4 border-gray-800 bg-gray-900  p-5">
                                <div className="flex flex-row items-center">
                                    <ContentPost
                                        title="Main mechanic I created and learnt was the State Machine"
                                        description="The Iron Brawlers state machine was designed to handle player actions by isolating each behavior into specific states. By implementing a base PlayerState class, I could create individual states (e.g., idle, jumping, blocking) that independently manage the player’s movements and interactions. This modular structure not only simplifies the code but also makes it easy to add new actions. For example, in JumpingState, the player’s vertical force is controlled, and it automatically transitions back to IdleState upon landing. This approach ensures responsive and organized gameplay, ideal for managing complex interactions in a platform brawler."
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col items-center relative z-10 w-full border-4 border-gray-800 bg-gray-900  p-5">
                                <div className="flex flex-row items-center">
                                    <ContentPost
                                        title="idle animation for one of the characters flowerBoi"
                                        image="/Images/gamedev/IronBrawlersImages/flowerboi.gif"
                                        description="Just putting this gif here while I'm managing what to actually put here and also experimenting with layout.  "
                                        additionalTexts={["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nulla facilisi. Proin vehicula."]}
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


