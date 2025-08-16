"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import LuxuryCard from "@/components/shared/LuxaryCard"; // <-- import here
import { motion, AnimatePresence } from "framer-motion";

const properties = [
    { id: 1, name: "Luxury Villa", location: "Mumbai, India", price: "₹2.5 Cr", status: "For Sale", type: "Villa", images: ["/assets/apartment/a1.jpg"], companyLogo: "/assets/builders/bhutani.png" },
    { id: 2, name: "Modern Apartment", location: "Pune, India", price: "₹95 Lakh", status: "For Sale", type: "Apartment", images: ["/assets/apartment/p1.jpg"], companyLogo: "/assets/builders/ats.png" },
    { id: 3, name: "Beachfront Villa", location: "Goa, India", price: "₹4.8 Cr", status: "For Sale", type: "Villa", images: ["/assets/apartment/a2.jpg"], companyLogo: "/assets/builders/Gaur.png" },
    { id: 4, name: "City View Apartment", location: "Bengaluru, India", price: "₹1.2 Cr", status: "For Sale", type: "Apartment", images: ["/assets/apartment/p2.jpg"], companyLogo: "/assets/builders/max.png" },
    { id: 5, name: "Luxury Penthouse", location: "Delhi, India", price: "₹3.5 Cr", status: "For Sale", type: "Penthouse", images: ["/assets/apartment/a3.jpg"], companyLogo: "/assets/builders/godrej.png" },
    { id: 6, name: "Garden Facing Apartment", location: "Chandigarh, India", price: "₹85 Lakh", status: "For Sale", type: "Apartment", images: ["/assets/apartment/p3.jpg"], companyLogo: "/assets/builders/mahagun.png" },
    { id: 7, name: "Mountain View Cottage", location: "Manali, India", price: "₹1.1 Cr", status: "For Sale", type: "Cottage", images: ["/assets/apartment/a4.jpg"], companyLogo: "/assets/builders/supertech.png" },
    { id: 8, name: "Lake View Villa", location: "Udaipur, India", price: "₹2.9 Cr", status: "For Sale", type: "Villa", images: ["/assets/apartment/p4.jpg"], companyLogo: "/assets/builders/NBCC.png" },
    { id: 9, name: "Prime Plot", location: "Jaipur, India", price: "₹60 Lakh", status: "For Sale", type: "Plot", images: ["/assets/apartment/p1.jpg"], companyLogo: "/assets/builders/country.png" },
];

export default function OurPropertiesDetail() {
    const [showAll, setShowAll] = useState(false);

    const visibleProperties = showAll ? properties : properties.slice(0, 6);

    return (
        <div className="p-6 bg-[#faf2c0]">
            {/* ...header code... */}
            <div className="mb-4 text-center sm:text-left">
                {/* Small Tagline */}
                <h4 className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent font-semibold tracking-widest uppercase">
                    Our Properties
                </h4>

                {/* Main Heading */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2">
                    <div>
                        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                            Latest Properties
                        </h2>
                        <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full mt-2 sm:mt-3"></div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {visibleProperties.map((property, index) => {
                    if (!showAll && index === 5 && properties.length > 6) {
                        return (
                            <MoreCard
                                key="more-card"
                                count={properties.length - 5}
                                onClick={() => setShowAll(true)}
                            />
                        );
                    }
                    return (
                        <LuxuryCard
                            key={property.id}
                            property={property}
                        // optionally add props like onViewDetails, liked state, etc.
                        />
                    );
                })}
            </div>

        </div>
    );
}

function MoreCard({ count, onClick }) {
    return (
        <Card
            onClick={onClick}
            className="overflow-hidden rounded-2xl shadow-lg relative bg-white border border-gray-100 cursor-pointer group"
        >
            <div className="absolute inset-0 bg-gray-300 blur-sm"></div>
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">+{count} More</span>
            </div>
        </Card>
    );
}
