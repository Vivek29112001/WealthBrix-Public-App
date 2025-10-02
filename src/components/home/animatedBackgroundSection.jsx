"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import { FaMapMarkerAlt, FaHome, FaRupeeSign } from "react-icons/fa"
import CountUp from "react-countup"
import Link from "next/link"

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

                <div>
                    <Link
                        href="/properties/residential"
                        className="mt-10 inline-block bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 
               text-white font-semibold text-lg px-8 py-3 rounded-full shadow-xl 
               hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                    >
                        Explore The Properties
                    </Link>
                </div>

            </div>
        </div>
    )
}
