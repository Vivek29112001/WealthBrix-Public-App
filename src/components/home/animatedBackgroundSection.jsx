"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import { FaMapMarkerAlt, FaHome, FaRupeeSign } from "react-icons/fa"
import CountUp from "react-countup"

const bgImages = [
    // "/assets/bg0.jpg",
    "/assets/bg1.jpg",
    "/assets/bg2.jpg",
    "/assets/bg3.jpg",
    "/assets/bg4.jpg",
    "/assets/bg0.jpg"
]

export default function AnimatedBackgroundSection() {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        // Loop endlessly, no reset
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % bgImages.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="relative h-screen w-full overflow-hidden">
            {bgImages.map((src, index) => (
                <Image
                    key={index}
                    src={src}
                    alt={`Background ${index}`}
                    fill
                    priority
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-[3000ms] ease-in-out
            ${index === current ? "opacity-100 scale-110 z-10" : "opacity-0 scale-100 z-0"}`}
                />
            ))}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 z-20"></div>

            {/* Foreground Content */}
            <div className="relative z-30 h-full flex flex-col items-center justify-center text-center text-white px-1">
                <h1 className="text-5xl sm:text-6xl font-bold drop-shadow-xl">
                    Apna Dream Home Yahin Hai
                </h1>
                <div className="mt-6 text-xl sm:text-2xl text-gray-300 max-w-4xl flex flex-wrap justify-center gap-8">
                    <span className="flex items-center gap-2">
                        <FaMapMarkerAlt /> Right Location
                    </span>
                    <span className="flex items-center gap-2">
                        <FaHome /> Dream Home
                    </span>
                    <span className="flex items-center gap-2">
                        <FaRupeeSign /> Best Price
                    </span>
                </div>

                {/* Search Bar */}
                <div className="mt-8 w-full max-w-2xl relative z-30">
                    <form className="flex flex-col sm:flex-row items-center gap-4 bg-white/90 p-4 rounded-xl shadow-xl backdrop-blur-md">
                        <input
                            type="text"
                            placeholder="Search by location, property type, or keyword..."
                            className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800"
                        />
                        <button
                            type="submit"
                            className="px-6 py-2 bg-[rgba(121,64,11,1)] text-white font-semibold rounded-md hover:bg-orange-900 transition"
                        >
                            Search
                        </button>
                    </form>
                </div>

                {/* Stats Section */}
                <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center text-white">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold">
                            <CountUp end={50000} duration={3} separator="," />+
                        </h2>
                        <p className="mt-2 text-lg text-gray-300">Happy Customers</p>
                    </div>
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold">
                            <CountUp end={100} duration={3} />+
                        </h2>
                        <p className="mt-2 text-lg text-gray-300">Awards</p>
                    </div>
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold">
                            <CountUp end={100} duration={3} />+
                        </h2>
                        <p className="mt-2 text-lg text-gray-300">Projects</p>
                    </div>
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold">
                            <CountUp end={100} duration={3} />+
                        </h2>
                        <p className="mt-2 text-lg text-gray-300">Developers</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
