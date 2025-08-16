"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const builders = [
    { name: "Gaur", logo: "/assets/builders/gaur.png" },
    { name: "ATS", logo: "/assets/builders/ats.png" },
    { name: "Supertech", logo: "/assets/builders/supertech.png" },
    { name: "Mahagun", logo: "/assets/builders/mahagun.png" },
    { name: "country", logo: "/assets/builders/country.png" },
    { name: "Max", logo: "/assets/builders/max.png" },
    { name: "NBCC", logo: "/assets/builders/NBCC.png" },
    { name: "bhutani", logo: "/assets/builders/bhutani.png" },
    { name: "experion", logo: "/assets/builders/experion.png" },
    { name: "Godrej", logo: "/assets/builders/godrej.png" },
    { name: "m3m", logo: "/assets/builders/m3m.png" }
];

export default function OurBuilders() {
    const logoList = [...builders, ...builders]; // seamless loop

    return (
        <section className="w-full py-12 bg-[#faf2c0]">
            <motion.div
                className="max-w-7xl mx-auto px-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                {/* Heading */}
                <div className="text-center lg:text-left mb-8 px-2">
                    <motion.h4
                        className="text-orange-600 font-semibold text-sm uppercase tracking-widest"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Our Builders
                    </motion.h4>

                    <motion.h2
                        className="text-3xl font-extrabold text-gray-900 tracking-tight mt-2"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Our Associations & Trusted Partners
                    </motion.h2>

                    <motion.div
                        className="h-1 w-20 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full mt-4"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        viewport={{ once: true }}
                    ></motion.div>
                </div>

                {/* Infinite Scroll Logos */}
                <motion.div
                    className="overflow-hidden relative"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="flex gap-5 animate-business-marquee">
                        {logoList.map((b, idx) => (
                            <div
                                key={idx}
                                className="min-w-[150px] flex-shrink-0 flex items-center justify-center transform transition duration-200 hover:scale-105 hover:drop-shadow-lg"
                            >
                                <Image
                                    src={b.logo}
                                    alt={b.name}
                                    width={120}
                                    height={80}
                                    className="object-contain grayscale hover:grayscale-0 transition duration-300 ease-in-out"
                                />
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Animation */}
                <style jsx>{`
          @keyframes business-marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-business-marquee {
            animation: business-marquee 22s linear infinite;
          }
          .animate-business-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
            </motion.div>
        </section>
    );
}
