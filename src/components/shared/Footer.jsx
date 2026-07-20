import Link from "next/link"
import Image from "next/image"
import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa"
import { MapPin, Mail, Phone, ExternalLink } from "lucide-react"

const sisterProjects = [
    {
        name: "Nature's Village",
        url: "https://naturesvillage.co.in/",
        tagline: "A serene residential retreat",
    },
    {
        name: "Ganga County",
        url: "https://gangacounty.org.in/",
        tagline: "Riverside living, redefined",
    },
]

export default function Footer() {
    return (
        <footer
            className="text-white font-sans relative border-t"
            style={{ backgroundColor: "rgb(32, 35, 59)", borderColor: "rgba(212, 175, 55, 0.35)" }}
        >
            {/* Gold hairline accent */}
            <div
                className="h-[2px] w-full"
                style={{ background: "linear-gradient(90deg, transparent, #d4af37, transparent)" }}
            />

            <div className="max-w-7xl mx-auto px-4 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                {/* Brand */}
                <div className="space-y-4">
                    <Image
                        src="/assets/logo.svg"
                        alt="Wealth Brix Logo"
                        width={140}
                        height={56}
                        className="h-12 w-auto object-contain drop-shadow-lg"
                    />
                    <p className="text-sm leading-relaxed" style={{ color: "#b3a87e" }}>
                        Building future, brick by brick — premium residential, commercial & luxury
                        real estate across Uttarakhand and NCR.
                    </p>
                    <div className="flex gap-4 pt-1">
                        <a href="https://www.facebook.com/p/Wealth-brix-61574633926093/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#d4af37] transition">
                            <FaFacebook className="h-5 w-5" />
                        </a>
                        <a href="https://www.youtube.com/@WealthBrix" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-[#d4af37] transition">
                            <FaYoutube className="h-5 w-5" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#d4af37] transition">
                            <FaInstagram className="h-5 w-5" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[#d4af37] transition">
                            <FaLinkedin className="h-5 w-5" />
                        </a>
                    </div>
                </div>

                {/* Quick links */}
                <div>
                    <h3 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#d4af37" }}>
                        Explore
                    </h3>
                    <ul className="space-y-3 text-sm">
                        <li><Link href="/" className="hover:text-[#d4af37] transition">Home</Link></li>
                        <li><Link href="/projects" className="hover:text-[#d4af37] transition">Projects</Link></li>
                        <li><Link href="/our-works" className="hover:text-[#d4af37] transition">Our Work</Link></li>
                        <li><Link href="/about" className="hover:text-[#d4af37] transition">About</Link></li>
                        <li><Link href="/contact-us" className="hover:text-[#d4af37] transition">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Sister projects */}
                <div>
                    <h3 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#d4af37" }}>
                        Part Of Our Group
                    </h3>
                    <ul className="space-y-4">
                        {sisterProjects.map((p) => (
                            <li key={p.url}>
                                <a
                                    href={p.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-start gap-2"
                                >
                                    <div>
                                        <span className="text-sm font-medium group-hover:text-[#d4af37] transition flex items-center gap-1">
                                            {p.name}
                                            <ExternalLink className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100" />
                                        </span>
                                        <span className="text-xs" style={{ color: "#b3a87e" }}>{p.tagline}</span>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#d4af37" }}>
                        Reach Us
                    </h3>
                    <ul className="space-y-3 text-sm" style={{ color: "#b3a87e" }}>
                        <li className="flex gap-2 items-start">
                            <MapPin className="h-4 w-4 mt-0.5 shrink-0" style={{ color: "#d4af37" }} />
                            <span>NX One Tower T2, Unit A02, Tech Zone 4, Greater Noida West, (U.P) – 201318</span>
                        </li>
                        <li className="flex gap-2 items-center">
                            <Mail className="h-4 w-4 shrink-0" style={{ color: "#d4af37" }} />
                            <Link href="/contact-us" className="hover:text-[#d4af37] transition">Contact form</Link>
                        </li>
                        <li className="flex gap-2 items-center">
                            <Phone className="h-4 w-4 shrink-0" style={{ color: "#d4af37" }} />
                            <span>Available on request</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t" style={{ borderColor: "rgba(212, 175, 55, 0.2)" }}>
                <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs" style={{ color: "#b3a87e" }}>
                    <p>© {new Date().getFullYear()} Wealth Brix. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        Made with <span style={{ color: "#d4af37" }}>❤</span> by{" "}
                        <a
                            href="https://www.vyteq.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold hover:text-[#d4af37] transition"
                        >
                            Vyteq
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}
