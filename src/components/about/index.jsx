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
        { label: "Happy Families", value: 1200, suffix: "+", icon: Users2 },
        { label: "Property Options", value: 20, suffix: "+", icon: Building2 },
        { label: "On-time Delivery", value: 98, suffix: "%", icon: Clock },
        { label: "Years of Experience", value: 15, suffix: "+", icon: Award },
    ];

    return (
        <main className="min-h-screen bg-gradient-to-b from-white via-white to-slate-50">
            {/* ================= HERO ================= */}
            <section className="relative overflow-hidden py-1 pb-20">
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
                        style={{ backgroundColor: "var(--luxury-gold-light)", color: "var(--luxury-dark)" }}
                    >
                        About Us
                    </Badge>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                        className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight"
                    >
                        A New Beginning, Backed by{" "}
                        <span style={{ background: `linear-gradient(to right, var(--luxury-gold), var(--luxury-gold-light))`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                            Decades of Experience
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mt-5 text-lg max-w-2xl"
                        style={{ color: "var(--luxury-text-muted)" }}
                    >
                        Though we officially started our journey in 2025, our foundation is built on <strong>over 15 years of experience</strong> in real estate.
                        Mr. Vivek brings <strong>15+ years of wisdom</strong>.
                        Together, we blend deep knowledge with fresh energy to create homes, not just houses.
                    </motion.p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <Button asChild className="px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all"
                            style={{ backgroundColor: "var(--luxury-gold)", color: "var(--luxury-dark)", boxShadow: "var(--luxury-shadow)" }}>
                            <Link href="/projects">🚀 Explore Projects</Link>
                        </Button>
                        <Button asChild variant="outline" className="px-6 py-3 rounded-lg"
                            style={{ backgroundColor: "rgba(250, 249, 246, 0.6)", border: "1px solid var(--luxury-gold-light)" }}>
                            <Link href="#contact">📞 Talk to an Expert</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* ================= STATS ================= */}
            <section className="container mx-auto px-4 py-15">
                <Card className="border-none shadow-lg rounded-xl overflow-hidden"
                    style={{ background: `linear-gradient(to right, var(--luxury-gold-light), #f6e6b8, var(--luxury-gold-light))`, boxShadow: "var(--luxury-shadow)" }}>
                    <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
                        {stats.map((s, i) => (
                            <motion.div key={s.label}
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                className="flex flex-col items-center">
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
            <section className="relative py-16 overflow-hidden">
                {/* Background Luxury Gold Blur */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute -top-24 -right-24 w-[400px] h-[400px] rounded-full blur-3xl opacity-40"
                        style={{ backgroundColor: "rgba(212, 175, 55, 0.2)" }} />
                    <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full blur-3xl opacity-40"
                        style={{ backgroundColor: "rgba(240, 217, 140, 0.2)" }} />
                </div>

                <div className="container mx-auto px-4">
                    {/* Heading */}
                    <div className="text-center mb-12">
                        <h4 className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent font-semibold tracking-widest uppercase">
                            Our Story
                        </h4>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
                            A Legacy of Experience, <span className="text-orange-600">A Future of Trust</span>
                        </h2>
                        <div className="mx-auto h-1 w-20 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full mt-4"></div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-10 items-center">

                        {/* ===== LEFT: Story Text ===== */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="space-y-5"
                        >
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Officially established in <strong>2025</strong>, our company carries the strength of
                                <strong> 15+ years of real-estate expertise</strong>.
                                With Mr. Vivek Kumar <strong>15+ years</strong> of deep industry insight ,we offer a rare blend of
                                <span className="text-orange-600 font-semibold"> wisdom and innovation</span>.
                            </p>

                            <p className="text-lg text-gray-700 leading-relaxed">
                                We’ve helped <strong>1200+ families</strong> turn their dream homes into reality.
                                But for us, success isn’t just about numbers—it’s about <span className="font-semibold text-orange-600">trust, relationships, and happiness</span>.
                            </p>

                            <ul className="mt-6 space-y-3">
                                {[
                                    "Licensed & transparent processes",
                                    "1200+ Happy Families served",
                                    "Partnerships with trusted developers",
                                    "End-to-end support from visit to possession",
                                ].map((pt) => (
                                    <li key={pt} className="flex items-start gap-2">
                                        <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
                                        <span>{pt}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* ===== RIGHT: Image with Overlay ===== */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="relative h-80 lg:h-[420px] rounded-2xl overflow-hidden shadow-xl"
                        >
                            <Image
                                src="/assets/about/team.jpg"
                                alt="Our Team"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                <p className="text-white text-lg sm:text-xl font-semibold drop-shadow-lg">
                                    “A Team That Builds Dreams”
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ================= LEADERSHIP ================= */}
            {/* ================= LEADERSHIP ================= */}
             <section className="relative py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Leadership</h2>
        <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
          Guided by vision and grounded in experience — our founders bring a legacy of trust,
          wisdom, and client-first values to every project.
        </p>

        {/* Only Vivek's card — centered and single column */}
        <div className="mt-12 max-w-sm mx-auto">
          <Card className="group hover:shadow-xl transition-shadow rounded-2xl border border-gray-100 bg-white">
            <CardHeader className="text-center">
              <CardTitle className="text-xl font-bold text-orange-600">Mr. Vivek Kumar</CardTitle>
              <p className="text-sm text-slate-500">Co-Founder • Strategy</p>
            </CardHeader>
            <CardContent className="text-sm text-slate-700 text-center pb-6">
              <span className="inline-block mb-2 px-3 py-1 text-xs font-semibold rounded-full bg-orange-100 text-orange-700">
                15+ Years Experience
              </span>
              <p>
                A trusted advisor with deep real-estate expertise. Known for guiding countless families
                to the right investments with precision and integrity.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

            {/* ================= MILESTONES ================= */}
            <section className="container mx-auto px-4 py-10">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Milestones</h2>
                <div className="mt-6 grid md:grid-cols-2 gap-6">
                    {[
                        { year: "2025", title: "Founded", desc: "Company officially launched, backed by 15+ years of leadership experience." },
                        { year: "2026", title: "First 100 Families", desc: "Matched 100+ families to their dream homes in our very first year." },
                        { year: "2028", title: "Trusted Partner", desc: "Recognized as a trusted partner by top developers in NCR & beyond." },
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
        </main>
    );
}
