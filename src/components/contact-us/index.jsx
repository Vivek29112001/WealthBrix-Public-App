"use client"

import React, { useState } from "react"
import emailjs from "@emailjs/browser"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

// Initialize EmailJS
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "")

const ContactUsPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    })
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setMessage("")
        setError("")

        try {
            const templateParams = {
                to_email: "vivek@wealthbrix.in",
                from_name: formData.name,
                from_email: formData.email,
                from_phone: formData.phone,
                message: formData.message,
                reply_to: formData.email,
            }

            const response = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
                templateParams
            )

            if (response.status === 200) {
                setMessage("✅ Your message has been sent successfully! We'll get back to you soon.")
                setFormData({ name: "", email: "", phone: "", message: "" })
            }
        } catch (err) {
            console.error("EmailJS Error:", err)
            setError("❌ Failed to send message. Please try again or contact us directly.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Get In Touch
                    </h1>
                    <p className="text-lg text-gray-600">
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>

                {/* Content */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        {/* Info Card */}
                        <Card className="shadow-lg border-0">
                            <CardContent className="p-8">
                                <div className="space-y-6">
                                    {/* Phone */}
                                    <div className="flex items-start gap-4">
                                        <div className="bg-orange-100 p-3 rounded-lg">
                                            <Phone className="h-6 w-6 text-orange-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Phone</h3>
                                            <p className="text-gray-600 mt-1">+91 99719 00065</p>
                                            <p className="text-gray-600">+91 92209 30065</p>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex items-start gap-4">
                                        <div className="bg-orange-100 p-3 rounded-lg">
                                            <Mail className="h-6 w-6 text-orange-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Email</h3>
                                            <p className="text-gray-600 mt-1">vivek@wealthbrix.in</p>
                                        </div>
                                    </div>

                                    {/* Address */}
                                    <div className="flex items-start gap-4">
                                        <div className="bg-orange-100 p-3 rounded-lg">
                                            <MapPin className="h-6 w-6 text-orange-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Address</h3>
                                            <p className="text-gray-600 mt-1">
                                                NX One Tower T2, Unit A02<br />
                                                Tech Zone 4, Greater Noida West<br />
                                                Uttar Pradesh - 201318, India
                                            </p>
                                        </div>
                                    </div>

                                    {/* Hours */}
                                    <div className="flex items-start gap-4">
                                        <div className="bg-orange-100 p-3 rounded-lg">
                                            <Clock className="h-6 w-6 text-orange-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Business Hours</h3>
                                            <p className="text-gray-600 mt-1">Monday - Sunday</p>
                                            <p className="text-gray-600">9:00 AM - 7:00 PM IST</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Map */}
                        <div className="rounded-lg overflow-hidden shadow-lg h-80">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.8067945809524!2d77.43239!3d28.601151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sNX%20One%20Tower%20T2!2sGreater%20Noida%20West%2C%20Uttar%20Pradesh"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <Card className="shadow-lg border-0">
                            <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                            </CardHeader>
                            <CardContent className="p-8">
                                {message && (
                                    <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                                        {message}
                                    </div>
                                )}
                                {error && (
                                    <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                                        {error}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {/* Name */}
                                    <div>
                                        <Label htmlFor="name" className="text-gray-700 font-medium">
                                            Full Name *
                                        </Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            disabled={loading}
                                            className="mt-2 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <Label htmlFor="email" className="text-gray-700 font-medium">
                                            Email Address *
                                        </Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="your.email@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            disabled={loading}
                                            className="mt-2 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <Label htmlFor="phone" className="text-gray-700 font-medium">
                                            Phone Number
                                        </Label>
                                        <Input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            placeholder="+91 9XXXXXXXXX"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            disabled={loading}
                                            className="mt-2 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                                        />
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <Label htmlFor="message" className="text-gray-700 font-medium">
                                            Message *
                                        </Label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            placeholder="Tell us more about your inquiry..."
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            disabled={loading}
                                            className="mt-2 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <Button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-6"
                                    >
                                        {loading ? "Sending..." : "Send Message"}
                                    </Button>

                                    <p className="text-sm text-gray-500 text-center mt-4">
                                        * Required fields
                                    </p>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUsPage
