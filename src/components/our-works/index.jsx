"use client"

import React from "react"

export default function OurWorksPage() {
    const videos = [
        {
            title: "Luxury Villas At Green Valley",
            youtubeId: "bHjdvrw1OPk",
        },
        {
            title: "ATS Retails Space",
            youtubeId: "9W27TmlgxiQ",
        },
        {
            title: "Green Valley Lansdowne Animated View",
            youtubeId: "05S-wEYDA_8",
        },
        {
            title: "Location View",
            youtubeId: "ec1cSDGqOyQ",
        },
    ]

    return (
        <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white py-6">
            <div className="container mx-auto px-6">
                {/* Page Heading */}
                <div className="text-center mb-14">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                        Our Works / Videos
                    </h1>
                    <div className="mx-auto h-1 w-24 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full mt-3"></div>
                </div>

                {/* Video Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {videos.map((vid) => (
                        <div
                            key={vid.youtubeId}
                            className="bg-white rounded-xl shadow-lg overflow-hidden transition hover:shadow-2xl"
                        >
                            <div className="relative pt-[56.25%]">
                                <iframe
                                    className="absolute inset-0 w-full h-full"
                                    src={`https://www.youtube.com/embed/${vid.youtubeId}`}
                                    title={vid.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="p-4 text-center">
                                <h2 className="text-lg font-semibold text-gray-800">{vid.title}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}
