// ContentPost.js
import React from "react";

export default function ContentPost({ title, description, image, additionalTexts = []  }) {
    return (
        <section>
            <div className="flex flex-col items-center" >
                <div className="flex flex-col items-center mb-8">
                        <div className="mb-8">
                            {title && (
                                <h2 className="text-3xl text-center font-semibold text-white mb-2">{title}</h2>
                            )}
                            {image && (
                                <div className="flex justify-center w-full">
                                <img
                                    className="mb-4 rounded-lg shadow-lg max-w-full h-auto"
                                    src={image}
                                    alt={title}
                                />
                                </div>
                            )}

                        {description && (
                            <p className="text-lg text-blue-200 text-center  leading-relaxed mx-auto max-w-3xl">
                                {description}
                            </p>
                        )}
                        {/* Render each additional text */}
                        {additionalTexts.map((text, index) => (
                            <p key={index} className="text-lg text-blue-200 text-center  leading-relaxed mx-auto max-w-3xl">
                                {text}
                            </p>
                        ))}
                    </div>
                </div>

            </div>


        </section>

    );
}
