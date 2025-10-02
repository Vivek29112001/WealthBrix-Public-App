"use client";

import React from "react";
import LuxuryCard from "@/components/shared/LuxaryCard"; // <-- custom card

const properties = [
    {
        id: 1,
        name: "Dholera Smart City Project",
        location: "Ahmedabad, India",
        price: "Starting from ₹10 Lakh",
        status: "For Sale",
        type: "Plot",
        images: ["/assets/apartment/dholera.png"],

    },
    {
        id: 2,
        name: "Amrapali Terrance Home",
        location: "Greater Noida, India",
        price: " Starting at ₹65 Lakh(2BHK)",
        status: "For Sale",
        type: "Flat",
        images: ["/assets/apartment/amrapali.webp"],

    },
    {
        id: 3,
        name: "ATS Kabana High",
        location: "Noida, India",
        price: "Starting at ₹56 Lakh ",
        status: "For Sale",
        type: "Shop",
        images: ["/assets/apartment/ats.jpg"],

    },
    {
        id: 4,
        name: "Sunrise Valley",
        location: "Lansdowne, India",
        price: "Starting from ₹15 Lakh 100 Guz",
        status: "For Sale",
        type: "Villa / Plot",
        images: ["/assets/apartment/v2.avif"],

    },
    {
        id: 5,
        name: "Green Valley",
        location: "Lansdowne, India",
        price: "Starting from ₹20 Lakh 100 Guz",
        status: "For Sale",
        type: "Villa / Plot",
        images: ["/assets/apartment/v1.webp"],
    },
];

export default function OurPropertiesDetail() {
    return (
        <section className="py-16 bg-gray-50" id="projects">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <h4 className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent font-semibold tracking-widest uppercase">
                        Our Properties
                    </h4>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
                        Latest Projects
                    </h2>
                    <div className="mx-auto h-1 w-20 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full mt-4"></div>
                </div>

                {/* Properties Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {properties.map((property) => (
                        <LuxuryCard
                            key={property.id}
                            property={property}
                            className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
