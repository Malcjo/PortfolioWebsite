// ContentPost.js
import React from "react";

export default function ContentPost({ title, description, image }) {
    return (
        <section>
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-wrap -m-4 justify-center">
                    <div className="flex flex-col items-center relative z-10 w-full border-4 border-gray-800 bg-gray-900 hover:bg-gray-800 transition-colors duration-300 p-5">
                        <div className="mb-8">
                            {title && (
                                <h2 className="text-3xl font-semibold text-white mb-2">{title}</h2>
                            )}
                            {image && (
                                <img
                                    className="mb-4 rounded-lg shadow-lg max-w-full h-auto"
                                    src={image}
                                    alt={title}
                                />
                            )}

                            {description && (
                                <p className="text-lg text-blue-200 leading-relaxed">{description}</p>
                            )}
                        </div>
                    </div>
                </div>

            </div>


        </section>

    );
}
