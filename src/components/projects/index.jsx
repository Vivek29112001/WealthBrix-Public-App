"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import {
    CheckCircle2,
    FileDown,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
    const [openImageIndex, setOpenImageIndex] = useState(null)
    const [activeProjectImages, setActiveProjectImages] = useState([])
    const [activeProjectName, setActiveProjectName] = useState("")

    const projects = [
        {
            name: "Dholera Smart City Project",
            subProjects: [
                {
                    title: "Luxury Plot - Orchid",
                    images: ["/assets/details/orchid-img.png"],
                    pdfs: [
                        { name: "Orchid Brochure", url: "/assets/details/Orchid-Brochure.pdf" },
                        { name: "Orchid Booking Status", url: "/assets/details/Orchid-booking.pdf" },
                        { name: "Orchid Price", url: "/assets/details/dhulera1.jpg" },
                    ],
                    details: [
                        "Located in Dholera SIR, Ahmedabad",
                        "Premium residential plots",
                        "Best connectivity and smart infrastructure",
                        "Starting from ₹10 Lakh onwards",
                    ],
                },
                {
                    title: "Airport Enclave",
                    images: ["/assets/details/Airport-enclave-img.png"],
                    pdfs: [
                        { name: "Airport Enclave Brochure", url: "/assets/details/Airport-Enclave-Brochure.pdf" },
                        { name: "Airport Enclave Status", url: "/assets/details/Airport-Enclave-Booking.pdf" },
                        { name: "Airport-Enclave Price", url: "/assets/details/dhulera2.jpg" },
                    ],
                    details: [
                        "Close to upcoming Dholera International Airport",
                        "Ideal for future investment",
                        "Plots available with flexible sizes",
                        "Starting from ₹12 Lakh onwards",
                    ],
                },
            ],
        },
        {
            name: "ATS Kabana High",
            images: ["/assets/details/ats.jpg"],
            pdfs: [
                { name: "Project Brochure", url: "/assets/details/ats-brochure.pdf" },
                { name: "Project Price", url: "/assets/details/Ats-Retail-Price.pdf" }
            ],
            details: [
                "Commercial hub in Noida with premium retail & office spaces",
                "Developed by ATS – a trusted name in real estate",
                "High footfall location with metro connectivity",
                "Starting from ₹56 Lakh onwards",
            ],
        },
        {
            name: "Green Valley, Lansdowne",
            images: ["/assets/details/v1.webp"],
            pdfs: [
                { name: "Project Brochure", url: "/assets/details/Himalays-GreenValley-Lansdowne-N.pdf" },
                { name: "Basic Price ", url: "/assets/details/greenVally.jpg" },
                { name: "Luxary Price", url: "/assets/details/greenVallyRate.jpg" }
            ],
            details: [
                "Scenic villa & plot options in lush Lansdowne hills",
                "Close to nature with modern amenities",
                "Secure gated community with clubhouse",
                "Starting from ₹20 Lakh onwards (100 Guz)",
            ],
        },
        {
            name: "SunRise Valley, Lansdowne",
            images: ["/assets/details/v2.avif"],
            comingSoon: true,
            details: [
                "Premium villas and plots with sunrise views",
                "Peaceful living amidst natural beauty",
                "Well-planned layouts & investment-friendly pricing",
                "Starting from ₹15 Lakh onwards (100 Guz)",
            ],
        }
    ]

    const handleImageClick = (images, name, index) => {
        setActiveProjectImages(images)
        setActiveProjectName(name)
        setOpenImageIndex(index)
    }

    return (
        <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
            {projects.map((project, idx) => (
                <section
                    key={project.name}
                    className={`py-12 ${idx % 2 === 0 ? "bg-slate-50/70" : "bg-white"}`}
                >
                    <div className="container mx-auto px-6">
                        {/* Section Heading */}
                        <div className="text-center mb-14">
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                                {project.name}
                            </h2>
                            <div className="mx-auto h-1 w-24 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full mt-3"></div>
                        </div>

                        {/* Sub-projects (like Dholera) */}
                        {project.subProjects ? (
                            project.subProjects.map((sp) => (
                                <div
                                    key={sp.title}
                                    className="grid lg:grid-cols-2 gap-12 mb-16 items-center"
                                >
                                    {/* Image */}
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg cursor-pointer"
                                        onClick={() => handleImageClick(sp.images, sp.title, 0)}
                                    >
                                        <Image
                                            src={sp.images[0]}
                                            alt={sp.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </motion.div>

                                    {/* Details */}
                                    <div className="space-y-5">
                                        <h3 className="text-2xl font-semibold text-orange-600">
                                            {sp.title}
                                        </h3>
                                        <ul className="space-y-3">
                                            {sp.details.map((d) => (
                                                <li key={d} className="flex gap-2 items-start">
                                                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1" />
                                                    <span className="text-gray-700">{d}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="flex gap-4 mt-6 flex-wrap">
                                            {sp.pdfs.map((pdf) => (
                                                <Button
                                                    key={pdf.name}
                                                    asChild
                                                    className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold shadow-md hover:shadow-lg transition"
                                                >
                                                    <Link href={pdf.url} target="_blank">
                                                        <FileDown className="h-4 w-4 mr-2" /> {pdf.name}
                                                    </Link>
                                                </Button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
                                {/* Image */}
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg cursor-pointer"
                                    onClick={() => handleImageClick(project.images, project.name, 0)}
                                >
                                    <Image
                                        src={project.images[0]}
                                        alt={project.name}
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>

                                {/* Details */}
                                <div className="space-y-5">
                                    <ul className="space-y-3">
                                        {project.details.map((d) => (
                                            <li key={d} className="flex gap-2 items-start">
                                                <CheckCircle2 className="h-5 w-5 text-green-600 mt-1" />
                                                <span className="text-gray-700">{d}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Coming soon check */}
                                    {project.comingSoon ? (
                                        <div className="mt-6">
                                            <span className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold shadow-md">
                                                🚀 To Be Launched – Coming Soon
                                            </span>
                                        </div>
                                    ) : (
                                        <div className="flex gap-4 mt-6 flex-wrap">
                                            {project.pdfs.map((pdf) => (
                                                <Button
                                                    key={pdf.name}
                                                    asChild
                                                    className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold shadow-md hover:shadow-lg transition"
                                                >
                                                    <a href={pdf.url} download>
                                                        <FileDown className="h-4 w-4 mr-2" /> {pdf.name}
                                                    </a>
                                                </Button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            ))}
        </main>
    )
}
