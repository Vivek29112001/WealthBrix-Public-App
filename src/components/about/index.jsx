"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Building2, Users2, Award, Handshake, Hammer, ShieldCheck, Clock, ArrowRight, HeartHandshake } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-white via-white to-slate-50">
            {/* HERO */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-100 via-transparent to-transparent" />
                <div className="container mx-auto px-4 pb-10  sm:pb-14">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
                        <Badge variant="secondary" className="mb-3 ">About Us</Badge>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                            Building Trust, Crafting Homes
                        </h1>
                        <p className="mt-4 text-slate-600 text-base sm:text-lg">
                            We simplify buying, selling, and managing properties with transparency, expert guidance, and a service-first mindset.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <Button asChild className="bg-orange-500 hover:bg-orange-600">
                                <Link href="/projects">Explore Projects</Link>
                            </Button>
                            <Button asChild variant="outline">
                                <Link href="#contact">Talk to an Expert</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* STATS STRIP */}
            <section aria-label="company-stats" className="container mx-auto px-4 pb-8 ">
                <Card className="border-none shadow-sm bg-[#f0d98c]">
                    <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 ">
                        {[
                            { label: "Happy Families", value: "2,500+", icon: Users2 },
                            { label: "Projects Delivered", value: "120+", icon: Building2 },
                            { label: "On-time Delivery", value: "97%", icon: Clock },
                            { label: "Awards & Honors", value: "15+", icon: Award },
                        ].map((s) => (
                            <div key={s.label} className="flex items-center gap-3">
                                <s.icon className="h-6 w-6 text-orange-500" />
                                <div>
                                    <div className="text-2xl font-semibold leading-none">{s.value}</div>
                                    <div className="text-xs text-slate-500 mt-1">{s.label}</div>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </section>

            {/* OUR STORY */}
            <section className="container mx-auto px-4 py-10">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Our Story</h2>
                        <p className="mt-4 text-slate-600">
                            From a small team with a big vision to a trusted real-estate brand—our journey has always been about people. We bring deep market knowledge, strong developer partnerships, and tech-enabled processes to help you make confident decisions.
                        </p>
                        <ul className="mt-6 space-y-3">
                            {[
                                "Licensed, registered, and transparent process",
                                "Curated inventory across premier locations",
                                "Dedicated relationship managers for end-to-end support",
                            ].map((pt) => (
                                <li key={pt} className="flex items-start gap-2 text-slate-700">
                                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
                                    <span>{pt}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative aspect-[4/3]">
                        <Image src="/images/about/office-team.jpg" alt="Team collaborating in the office" fill className="rounded-2xl object-cover shadow-md" />
                    </motion.div>
                </div>
            </section>

            {/* VALUES / WHY CHOOSE US */}
            <section className="container mx-auto px-4 py-4">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Why Choose Us</h2>
                <p className="mt-3 text-slate-600 max-w-3xl">
                    We’re committed to clarity, speed, and service. Here’s how we create value across every step of your journey.
                </p>

                <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                        { title: "Verified Listings", desc: "Project docs, approvals, and pricing validated with developers.", icon: ShieldCheck },
                        { title: "Expert Negotiation", desc: "We work hard to get you the best deal without compromise.", icon: Handshake },
                        { title: "Loan Assistance", desc: "Tie-ups with leading banks. Paperwork made simple.", icon: HeartHandshake },
                        { title: "Site Visits & Comparisons", desc: "Curated options matched to your budget and timeline.", icon: Building2 },
                        { title: "Transparent Fees", desc: "Clear commercials. No last-minute surprises.", icon: Award },
                        { title: "Post-sale Support", desc: "We stay with you through registration, handover, and beyond.", icon: Hammer },
                    ].map((f) => (
                        <Card key={f.title} className="hover:shadow-md transition-shadow">
                            <CardHeader className="flex flex-row items-center gap-3 pb-2">
                                <f.icon className="h-6 w-6 text-orange-500" />
                                <CardTitle className="text-base">{f.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="pt-0 text-slate-600 text-sm">{f.desc}</CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* HIGHLIGHT BANNER */}
            <section className="container mx-auto px-4 py-10">
                <Card className="overflow-hidden border-none bg-[#f0d98c] text-white">
                    <div className="grid md:grid-cols-2">
                        <div className="p-6 sm:p-8">
                            <h3 className="text-xl sm:text-2xl font-semibold">RERA Compliant. Client First. Always.</h3>
                            <p className="mt-2 text-white/90 text-sm sm:text-base">
                                We align with regulatory best practices and prioritize your interests through every decision.
                            </p>
                            <div className="mt-5 flex gap-3">
                                <Button asChild variant="secondary">
                                    <Link href="/contact">Contact Us</Link>
                                </Button>
                                <Button asChild variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                                    <Link href="/testimonials">Client Stories</Link>
                                </Button>
                            </div>
                        </div>
                        <div className="relative h-56 md:h-auto">
                            <Image src="/images/about/keys-handshake.jpg" alt="Handshake with new home keys" fill className="object-cover opacity-90" />
                        </div>
                    </div>
                </Card>
            </section>

            {/* TEAM SNAPSHOT */}
            <section className="container mx-auto px-4 py-4">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Leadership</h2>
                <p className="mt-3 text-slate-600 max-w-3xl">
                    A multi‑disciplinary team of real-estate, finance, and legal professionals who love solving for customers.
                </p>
                <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[1, 2, 3].map((n) => (
                        <Card key={n} className="group hover:shadow-md transition-shadow">
                            <div className="relative h-56">
                                <Image src={`/images/team/member-${n}.jpg`} alt={`Leadership member ${n}`} fill className="object-cover" />
                            </div>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-base">Member Name {n}</CardTitle>
                                <p className="text-xs text-slate-500">Co‑Founder • Strategy</p>
                            </CardHeader>
                            <CardContent className="pt-0 text-sm text-slate-600">
                                Focused on growth, partnerships, and a culture of customer obsession.
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* TIMELINE */}
            <section className="container mx-auto px-4 py-10">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Milestones</h2>
                <div className="mt-6 grid md:grid-cols-2 gap-6">
                    {[
                        { year: "2019", title: "Founded", desc: "Started with a mission to make property buying simple and safe." },
                        { year: "2021", title: "1000+ Homes Matched", desc: "Scaled across major micro‑markets with strong developer partnerships." },
                        { year: "2023", title: "Financing Desk", desc: "In‑house home‑loan assistance to speed up approvals and disbursals." },
                        { year: "2025", title: "Pan‑City Ops", desc: "Expanded team and coverage with tech‑enabled processes." },
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

            {/* FAQ */}
            <section className="container mx-auto px-4 py-10">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="mt-4">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Do you charge brokerage?</AccordionTrigger>
                        <AccordionContent>
                            We work on a transparent, success‑based model. Any applicable fees are discussed upfront—no surprises.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Can you help with home loans and paperwork?</AccordionTrigger>
                        <AccordionContent>
                            Yes. Our financing desk coordinates with leading banks and supports documentation end‑to‑end.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Do you arrange site visits?</AccordionTrigger>
                        <AccordionContent>
                            Absolutely. We curate options, schedule visits, and provide side‑by‑side comparisons to help you decide.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>

            {/* CTA */}
            <section id="contact" className="container mx-auto px-4 pb-16">
                <Card className="border-dashed">
                    <CardContent className="flex flex-col md:flex-row items-center justify-between gap-4 py-6">
                        <div>
                            <h3 className="text-xl font-semibold">Ready to find your home?</h3>
                            <p className="text-slate-600 text-sm mt-1">Talk to a specialist today. We’ll match you with the right project at the right price.</p>
                        </div>
                        <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
                            <Link href="/contact">Get in touch</Link>
                        </Button>
                    </CardContent>
                </Card>
            </section>
        </main>
    );
}
