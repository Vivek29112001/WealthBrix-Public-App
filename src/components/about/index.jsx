"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
    CheckCircle2, Building2, Users2, Award, Handshake,
    Hammer, ShieldCheck, Clock, HeartHandshake
} from "lucide-react";

export default function AboutPage() {
    const stats = [
        { label: "Happy Families", value: 2500, suffix: "+", icon: Users2 },
        { label: "Projects Delivered", value: 120, suffix: "+", icon: Building2 },
        { label: "On-time Delivery", value: 97, suffix: "%", icon: Clock },
        { label: "Awards & Honors", value: 15, suffix: "+", icon: Award },
    ];

    return (
        <main className="min-h-screen bg-gradient-to-b from-white via-white to-slate-50">

            {/* ================= HERO ================= */}
            <section className="relative overflow-hidden py-10 pb-20">
                {/* Animated Gold Blurs */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full blur-3xl animate-pulse"
                        style={{ backgroundColor: "rgba(212, 175, 55, 0.15)" }} />
                    <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full blur-3xl animate-pulse delay-300"
                        style={{ backgroundColor: "rgba(240, 217, 140, 0.15)" }} />
                </div>

                <div className="container mx-auto px-4">
                    <Badge
                        variant="secondary"
                        className="mb-4 px-3 py-1 text-sm rounded-full shadow-md"
                        style={{
                            backgroundColor: "var(--luxury-gold-light)",
                            color: "var(--luxury-dark)",
                        }}
                    >
                        About Us
                    </Badge>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                        className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight"
                    >
                        Building{" "}
                        <span style={{
                            background: `linear-gradient(to right, var(--luxury-gold), var(--luxury-gold-light))`,
                            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                        }}>Trust</span>, Crafting{" "}
                        <span style={{
                            background: `linear-gradient(to right, var(--luxury-gold-light), var(--luxury-gold))`,
                            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                        }}>Homes</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mt-5 text-lg max-w-2xl"
                        style={{ color: "var(--luxury-text-muted)" }}
                    >
                        We simplify buying, selling, and managing properties with transparency, expert guidance, and a service-first mindset.
                    </motion.p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <Button
                            asChild
                            className="px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all"
                            style={{
                                backgroundColor: "var(--luxury-gold)",
                                color: "var(--luxury-dark)",
                                boxShadow: "var(--luxury-shadow)",
                            }}
                        >
                            <Link href="/projects">🚀 Explore Projects</Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            className="px-6 py-3 rounded-lg"
                            style={{
                                backgroundColor: "rgba(250, 249, 246, 0.6)",
                                border: "1px solid var(--luxury-gold-light)",
                            }}
                        >
                            <Link href="#contact">📞 Talk to an Expert</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* ================= STATS ================= */}
            <section className="container mx-auto px-4 py-15">
                <Card
                    className="border-none shadow-lg rounded-xl overflow-hidden"
                    style={{
                        background: `linear-gradient(to right, var(--luxury-gold-light), #f6e6b8, var(--luxury-gold-light))`,
                        boxShadow: "var(--luxury-shadow)",
                    }}
                >
                    <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
                        {stats.map((s, i) => (
                            <motion.div
                                key={s.label}
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                className="flex flex-col items-center"
                            >
                                <s.icon className="h-10 w-10 mb-2" style={{ color: "var(--luxury-gold)" }} />
                                <div className="text-3xl font-extrabold">
                                    <CountUp end={s.value} suffix={s.suffix} duration={2.5} />
                                </div>
                                <p className="text-sm mt-1">{s.label}</p>
                            </motion.div>
                        ))}
                    </CardContent>
                </Card>
            </section>

            {/* ================= OUR STORY ================= */}
            <section className="container mx-auto px-4 py-16">
                <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    className="text-center text-3xl sm:text-4xl font-bold tracking-tight mb-10">
                    Our Story
                </motion.h2>
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}>
                        <p className="text-lg text-gray-700">
                            From a small team with a big vision to a trusted real-estate brand—our journey has always been about people.
                        </p>
                        <ul className="mt-6 space-y-3">
                            {[
                                "Licensed, registered, and transparent process",
                                "Curated inventory across premier locations",
                                "Dedicated relationship managers for end-to-end support",
                            ].map((pt) => (
                                <li key={pt} className="flex items-start gap-2">
                                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
                                    <span>{pt}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}>
                        <Image
                            src="/assets/about/team.jpg"
                            alt="Team collaborating"
                            width={600}
                            height={400}
                            className="rounded-2xl shadow-lg object-cover"
                        />
                    </motion.div>
                </div>
            </section>

            {/* ================= WHY CHOOSE US ================= */}
            <section className="container mx-auto px-4 py-16 bg-[var(--luxury-gold-light)] rounded-xl">
                <h2 className="text-3xl font-bold">Why Choose Us</h2>
                <p className="mt-3 max-w-3xl">We’re committed to clarity, speed, and service.</p>
                <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                        { title: "Verified Listings", desc: "Project docs verified.", icon: ShieldCheck },
                        { title: "Expert Negotiation", desc: "Get the best deal.", icon: Handshake },
                        { title: "Loan Assistance", desc: "Tie-ups with banks.", icon: HeartHandshake },
                        { title: "Site Visits", desc: "Curated options.", icon: Building2 },
                        { title: "Transparent Fees", desc: "Clear commercials.", icon: Award },
                        { title: "Post-sale Support", desc: "We stay with you.", icon: Hammer },
                    ].map((f) => (
                        <Card key={f.title} className="hover:shadow-lg transition-all">
                            <CardHeader className="flex flex-row items-center gap-3 pb-2">
                                <f.icon className="h-6 w-6" style={{ color: "var(--luxury-gold)" }} />
                                <CardTitle className="text-base">{f.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="pt-0 text-sm">{f.desc}</CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* ================= HIGHLIGHT BANNER ================= */}
            <section className="container mx-auto px-4 py-10">
                <Card className="overflow-hidden border-none"
                    style={{ backgroundColor: "var(--luxury-gold-light)", color: "var(--luxury-dark)" }}>
                    <div className="grid md:grid-cols-2">
                        <div className="p-6 sm:p-8">
                            <h3 className="text-xl sm:text-2xl font-semibold">RERA Compliant. Client First. Always.</h3>
                            <p className="mt-2 opacity-90 text-sm sm:text-base">
                                We align with regulatory best practices and prioritize your interests through every decision.
                            </p>
                            <div className="mt-5 flex gap-3">
                                <Button asChild variant="secondary">
                                    <Link href="/contact">Contact Us</Link>
                                </Button>
                                <Button asChild variant="outline" className="bg-white/10 border-white/30 hover:bg-white/20">
                                    <Link href="/testimonials">Client Stories</Link>
                                </Button>
                            </div>
                        </div>
                        <div className="relative h-56 md:h-auto">
                            <Image src="/assets/about/handshake.jpg" alt="Handshake with new home keys" fill className="object-cover" />
                        </div>
                    </div>
                </Card>
            </section>

            {/* ================= LEADERSHIP ================= */}
            <section className="container mx-auto px-4 py-4">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Leadership</h2>
                <p className="mt-3 text-slate-600 max-w-3xl">
                    A multi-disciplinary team of real-estate, finance, and legal professionals who love solving for customers.
                </p>
                <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[1, 2, 3].map((n) => (
                        <Card key={n} className="group hover:shadow-lg transition-shadow"
                            style={{ border: "1px solid rgba(212,175,55,0.25)" }}>
                            <div className="relative h-56 sm:h-64">
                                <Image src={`/assets/about/p${n}.jpg`} alt={`Leadership member ${n}`} fill
                                    className="object-contain bg-white" />
                            </div>
                            <CardHeader className="">
                                <CardTitle className="text-base">Member Name {n}</CardTitle>
                                <p className="text-xs">Co-Founder • Strategy</p>
                            </CardHeader>
                            <CardContent className="text-sm">
                                Focused on growth, partnerships, and a culture of customer obsession.
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* ================= MILESTONES ================= */}
            <section className="container mx-auto px-4 py-10">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Milestones</h2>
                <div className="mt-6 grid md:grid-cols-2 gap-6">
                    {[
                        { year: "2019", title: "Founded", desc: "Started with a mission to make property buying simple and safe." },
                        { year: "2021", title: "1000+ Homes Matched", desc: "Scaled across major micro-markets with strong developer partnerships." },
                        { year: "2023", title: "Financing Desk", desc: "In-house home-loan assistance to speed up approvals and disbursals." },
                        { year: "2025", title: "Pan-City Ops", desc: "Expanded team and coverage with tech-enabled processes." },
                    ].map((m) => (
                        <Card key={m.year}>
                            <CardHeader className="flex flex-row items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-orange-100 text-orange-700 grid place-items-center font-semibold">
                                    {m.year}
                                </div>
                                <div>
                                    <CardTitle className="text-base">{m.title}</CardTitle>
                                    <p className="text-xs text-slate-500">{m.year}</p>
                                </div>
                            </CardHeader>
                            <CardContent className="pt-0 text-sm text-slate-600">{m.desc}</CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            <Separator className="container mx-auto" />

            {/* ================= FAQ ================= */}
            <section className="container mx-auto px-4 py-10">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="mt-4">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Do you charge brokerage?</AccordionTrigger>
                        <AccordionContent>
                            We work on a transparent, success-based model. Any applicable fees are discussed upfront—no surprises.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Can you help with home loans and paperwork?</AccordionTrigger>
                        <AccordionContent>
                            Yes. Our financing desk coordinates with leading banks and supports documentation end-to-end.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Do you arrange site visits?</AccordionTrigger>
                        <AccordionContent>
                            Absolutely. We curate options, schedule visits, and provide side-by-side comparisons to help you decide.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>

            {/* ================= CTA ================= */}
            <section id="contact" className="container mx-auto px-4 pb-16">
                <Card className="border-dashed">
                    <CardContent className="flex flex-col md:flex-row items-center justify-between gap-4 py-6">
                        <div>
                            <h3 className="text-xl font-semibold">Ready to find your home?</h3>
                            <p className="text-slate-600 text-sm mt-1">Talk to a specialist today. We’ll match you with the right project at the right price.</p>
                        </div>
                        <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
                            <Link href="/contact-us">Get in touch</Link>
                        </Button>
                    </CardContent>
                </Card>
            </section>
        </main>
    );
}
