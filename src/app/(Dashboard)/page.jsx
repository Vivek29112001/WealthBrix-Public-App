"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa"
import { ChevronDown, X, Menu } from "lucide-react"
import Image from "next/image"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function HeaderNavbar() {
    const router = useRouter()
    const [isMounted, setIsMounted] = React.useState(false)
    const [isPopupOpen, setIsPopupOpen] = React.useState(false)
    const [formData, setFormData] = React.useState({
        fullName: "",
        email: "",
        contact: ""
    })

    React.useEffect(() => {
        setIsMounted(true)
        setIsPopupOpen(true) // show popup after mount
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsPopupOpen(false)
    }

    if (!isMounted) return null

    return (
        <header className="text-white font-sans relative">
            {/* Top bar */}
            <div className="w-full text-sm" style={{ backgroundColor: "rgb(209, 168, 121)" }}>
                <div className="max-w-7xl mx-auto flex justify-between items-center py-2 px-4">
                    <div className="flex items-center gap-2 px-2">
                        📍 E-144, Sector-63, Noida, (U.P) – 201301
                    </div>
                    <div className="flex gap-4">
                        <Link href="https://instagram.com" target="_blank" className="hover:text-pink-200">
                            <FaInstagram className="h-5 w-5" />
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" className="hover:text-blue-200">
                            <FaLinkedin className="h-5 w-5" />
                        </Link>
                        <Link href="https://facebook.com" target="_blank" className="hover:text-blue-200">
                            <FaFacebook className="h-5 w-5" />
                        </Link>
                        <Link href="https://youtube.com" target="_blank" className="hover:text-red-300">
                            <FaYoutube className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main header */}
            <div className="w-full shadow-md" style={{ backgroundColor: "rgb(32, 35, 59)" }}>
                <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4">

                    {/* Logo */}
                    <div className="flex items-center">
                        <Image
                            src="/assets/logo.svg"
                            alt="Logo"
                            width={60}
                            height={60}
                            className="h-15 w-120 object-contain drop-shadow-lg"
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden max-[720px]:hidden sm:flex w-2/4 justify-center space-x-5 text-base font-semibold uppercase tracking-wide">
                        <Link href="/" className="hover:text-orange-400 transition">Home</Link>
                        <div className="relative group">
                            <div className="flex items-center gap-1 cursor-pointer hover:text-orange-400 transition">
                                Properties
                                <ChevronDown size={16} />
                            </div>
                            <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg 
                                opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 
                                transition-all duration-300 ease-in-out z-50">
                                <Link href="/properties/residential" className="block px-4 py-2 hover:bg-orange-100 transition">Residential</Link>
                                <Link href="/properties/commercial" className="block px-4 py-2 hover:bg-orange-100 transition">Commercial</Link>
                                <Link href="/properties/luxury" className="block px-4 py-2 hover:bg-orange-100 transition">Luxury</Link>
                            </div>
                        </div>
                        <Link href="/about" className="hover:text-orange-400 transition">About</Link>
                        <Link href="/contact-us" className="hover:text-orange-400 transition">Contact Us</Link>
                        <Link href="/blog" className="hover:text-orange-400 transition">Blog</Link>
                        <Link href="/career" className="hover:text-orange-400 transition">Career</Link>
                    </nav>

                    {/* Mobile Hamburger Menu */}
                    <div className="block sm:hidden">
                        <Sheet>
                            <SheetTrigger>
                                <Menu size={28} className="text-white" />
                            </SheetTrigger>
                            <SheetContent
                                side="right"
                                className="bg-[rgb(32,35,59)] text-white z-[2000]"
                            >
                                {/* Logo */}
                                <div className="flex items-center gap-2 mb-6">
                                    <Image
                                        src="/assets/logo.png"
                                        alt="Logo"
                                        width={50}
                                        height={50}
                                        className="h-12 w-auto object-contain"
                                    />
                                    <div className="flex flex-col leading-tight">
                                        <span className="text-[rgb(250,242,192)] text-xl font-extrabold uppercase">
                                            Wealth{" "}
                                            <span className="text-[rgba(121,64,11,1)] font-extrabold">
                                                Brix
                                            </span>
                                        </span>
                                        <span className="text-gray-300 text-xs italic">
                                            Building future, brick by brick
                                        </span>
                                    </div>
                                </div>

                                {/* Links */}
                                <nav className="flex flex-col gap-4 font-semibold text-lg px-10">
                                    <Link href="/" className="hover:text-orange-400 transition">Home</Link>
                                    <Link href="/properties/residential" className="hover:text-orange-400 transition">Residential</Link>
                                    <Link href="/properties/commercial" className="hover:text-orange-400 transition">Commercial</Link>
                                    <Link href="/properties/luxury" className="hover:text-orange-400 transition">Luxury</Link>
                                    <Link href="/about" className="hover:text-orange-400 transition">About</Link>
                                    <Link href="/contact-us" className="hover:text-orange-400 transition">Contact Us</Link>
                                    <Link href="/blog" className="hover:text-orange-400 transition">Blog</Link>
                                    <Link href="/career" className="hover:text-orange-400 transition">Career</Link>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>

            {/* Popup */}
            {isPopupOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-[3000]">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
                        <button
                            onClick={() => setIsPopupOpen(false)}
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                        >
                            <X size={20} />
                        </button>

                        <h2 className="text-lg font-bold mb-4 text-gray-800">Fill Your Details</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <input
                                    type="text"
                                    id="fullName"
                                    value={formData.fullName}
                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                    className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-orange-500 text-black"
                                    placeholder="Full Name"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-orange-500 text-black"
                                    placeholder="Email"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    id="contact"
                                    value={formData.contact}
                                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                                    className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-orange-500 text-black"
                                    placeholder="Contact Detail"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 w-full"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </header>
    )
}
