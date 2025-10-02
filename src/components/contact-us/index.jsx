"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactUsPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleChange = (e) => {
        const { id, value } = e.target
        setFormData((prev) => ({ ...prev, [id]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
        alert("Your message has been sent!")
        setFormData({ name: "", email: "", message: "" })
    }

    return (
        <main className="min-h-screen bg-white">
            {/* ================= HEADER ================= */}
            <section className="relative py-20 border-b">
                <div className="container mx-auto px-6 text-center">
                    <h4 className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent font-semibold tracking-widest uppercase">
                        Contact Us
                    </h4>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-2">
                        We’re Just a Call Away
                    </h1>
                    <div className="mx-auto h-1 w-20 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full mt-4"></div>
                    <p className="mt-5 text-lg text-slate-600 max-w-2xl mx-auto">
                        Have questions or need assistance? Get in touch with us — our team is here to help you 7 days a week.
                    </p>
                </div>
            </section>

            {/* ================= CONTENT ================= */}
            <section className="container mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8"
                >
                    <Card className="shadow-lg rounded-2xl border border-gray-100">
                        <CardContent className="space-y-6 py-8">
                            <div className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-orange-500" />
                                <a className="hover:underline text-slate-700">
                                    +91 99719 00065 | +91 92209 30065
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-orange-500" />
                                <a className="hover:underline text-slate-700">
                                    vivek@wealthbrix.in
                                </a>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-orange-500 mt-1" />
                                <p className="text-slate-700">
                                    Nx One, Tower T2, A02, Tech Xone 4 <br /> Greater Noida, Uttar Pradesh 201301
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Clock className="h-5 w-5 text-orange-500" />
                                <p className="text-slate-700">Mon - Sun: 9:00 AM - 7:00 PM</p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Google Map */}
                    <motion.div
                        className="overflow-hidden rounded-2xl shadow-md"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d28023.633458002536!2d77.432393!3d28.6011513!3m2!1i1024!2i768!4f13.1!2m1!1sNx%20One%20Tower%20T2%20A02%20Tech%20Xone%204%20Greater%20Noida%20UttarPradesh%20201301%20map%20location!5e0!3m2!1sen!2sin!4v1755337333829!5m2!1sen!2sin"
                            width="100%"
                            height="280"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </motion.div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Card className="shadow-lg rounded-2xl border border-gray-100">
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold text-orange-600">
                                Send us a Message
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Your Message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <motion.div whileHover={{ scale: 1.02 }}>
                                    <Button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold py-3 rounded-lg"
                                    >
                                        Send Message
                                    </Button>
                                </motion.div>
                            </form>
                        </CardContent>
                    </Card>
                </motion.div>
            </section>
        </main>
    )
}
