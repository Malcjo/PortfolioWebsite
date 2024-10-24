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
                        <ContentPost
                        title="Project Overview"
                        description="This was a 6 month class group project. there were including me in my group, 3 artists, and me as the programmer. Our goal was to make a platform brawler, inspired by games like Super Smash Brothers using the Unity Game Engine. Going in I was aware of the difficulties of creating such a project but I knew it would push me and teach me a lot. For this project, I learnt about creating a state machine to handle the player's states and interactions. I really enjoyed the creative process of designing the game with my group and problem solving to create the demo."
                        />
                        <ContentPost className="bg-indigo-700"
                        image="/Images/gamedev/IronBrawlersImages/titleImage.png"
                        />
                    </div>
                </div>

                {/* Add more ContentPost components as needed */}
            </div>
        </div>

    </section>

  );
}
