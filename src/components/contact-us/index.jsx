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
        <div
            className="min-h-screen"
            style={{
                color: "var(--luxury-text-light)",
                padding: "1rem 1rem",
            }}
        >
            {/* Page Header */}
            <motion.div
                className="text-center mb-10"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <h1
                    className="text-4xl font-bold"
                    style={{ color: "var(--luxury-gold)" }}
                >
                    Call Us
                </h1>
                <p
                    className="mt-2 text-lg"
                    style={{ color: "var(--luxury-text-muted)" }}
                >
                    We’re just a call or message away
                </p>
            </motion.div>

            {/* Content Section */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2
                        className="text-2xl font-semibold"
                        style={{ color: "var(--luxury-gold-light)" }}
                    >
                        Get in Touch
                    </h2>
                    <p
                        className="leading-relaxed"
                        style={{ color: "var(--luxury-text-muted)" }}
                    >
                        Whether you have questions or need assistance, we are
                        here to help. Contact us through the following details
                        or fill out the form.
                    </p>

                    <motion.div whileHover={{ scale: 1.02 }}>
                        <Card
                            style={{
                                boxShadow: "var(--luxury-shadow)",
                                borderRadius: "var(--luxury-radius)",
                            }}
                        >
                            <CardContent className="space-y-5 py-6">
                                <div className="flex items-center gap-3">
                                    <Phone
                                        className="h-5 w-5"
                                        style={{ color: "var(--luxury-gold)" }}
                                    />
                                    <a
                                        href="tel:+918929053385"
                                        className="hover:underline"
                                    >
                                        +91 89290 53385
                                    </a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail
                                        className="h-5 w-5"
                                        style={{ color: "var(--luxury-gold)" }}
                                    />
                                    <a
                                        href="mailto:info@truhomes.in"
                                        className="hover:underline"
                                    >
                                        info@truhomes.in
                                    </a>
                                </div>
                                <div className="flex items-start gap-3">
                                    <MapPin
                                        className="h-5 w-5 mt-1"
                                        style={{ color: "var(--luxury-gold)" }}
                                    />
                                    <p>
                                        19/3, First Floor, Ashok Nagar,
                                        <br /> New Delhi, Delhi 110018
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Clock
                                        className="h-5 w-5"
                                        style={{ color: "var(--luxury-gold)" }}
                                    />
                                    <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Google Map */}
                    <motion.div
                        className="overflow-hidden rounded-lg"
                        style={{
                            boxShadow: "var(--luxury-shadow)",
                            borderRadius: "var(--luxury-radius)",
                        }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.063510182973!2d77.08218207463356!3d28.59730767568366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d051d81f6244d%3A0x9e67dfd39fe7b7d2!2sAshok%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110018!5e0!3m2!1sen!2sin!4v1692095658921!5m2!1sen!2sin"
                            width="100%"
                            height="250"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </motion.div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Card
                        style={{
                            boxShadow: "var(--luxury-shadow)",
                            borderRadius: "var(--luxury-radius)",
                        }}
                    >
                        <CardHeader>
                            <CardTitle
                                style={{
                                    color: "var(--luxury-gold)",
                                }}
                                className="text-xl font-semibold"
                            >
                                Send us a Message
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-5">
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
                                <div className="space-y-1">
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
                                        className="w-full"
                                        style={{
                                            backgroundColor: "var(--luxury-gold)",
                                            color: "var(--luxury-dark)",
                                        }}
                                    >
                                        Send Message
                                    </Button>
                                </motion.div>
                            </form>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    )
}
