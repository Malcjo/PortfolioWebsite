// ContentPost.js
import React from "react";

export default function ContentPost({ title, description, image }) {
    return (
        <section>
            <div className="flex flex-col items-center" >
                <div className="flex flex-col items-center mb-8">
                        <div className="mb-8">
                            {title && (
                                <h2 className="text-3xl font-semibold text-white mb-2">{title}</h2>
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
                                <p className="text-lg text-blue-200 leading-relaxed mx-auto max-w-3xl">
                                    {description}
                                    </p>
                            )}
                        </div>
                </div>

            </div>


        </section>

    );
}
