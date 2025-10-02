"use client";

import { useState, useMemo } from "react";
import LuxuryCard from "@/components/shared/LuxaryCard";
import BreadFilterComponent from "@/components/shared/BreadFilterCrumb";

const parsePriceINR = (str) => {
    if (!str) return 0;
    const clean = str.replace(/[₹,\s]/g, "").toLowerCase();
    const num = parseFloat(clean.replace(/[a-z]/g, "")) || 0;
    if (clean.includes("cr")) return num * 1e7;
    if (clean.includes("lakh") || clean.includes("lac")) return num * 1e5;
    return num;
};

const luxaryProperties = [
    {
        id: 1,
        title: "Green Valley, Lansdowne",
        location: "Lansdowne, Uttarakhand",
        price: "₹ 20 Lakh onwards",
        type: "Villa & Plot",
        area: "Starting from 100 Guz",
        status: "New Launch",
        description: [
            "Scenic villa & plot options in lush Lansdowne hills",
            "Close to nature with modern amenities",
            "Secure gated community with clubhouse",
            "Starting from ₹20 Lakh onwards (100 Guz)",
            "Project Brochure | Basic Price | Luxury Price",
        ],
        images: ["/assets/luxury/v1.webp"],
    },
    {
        id: 2,
        title: "SunRise Valley, Lansdowne",
        location: "Lansdowne, Uttarakhand",
        price: "₹ 15 Lakh onwards",
        type: "Villa & Plot",
        area: "Starting from 100 Guz",
        status: "New Launch",
        description: [
            "Premium villas and plots with sunrise views",
            "Peaceful living amidst natural beauty",
            "Well-planned layouts & investment-friendly pricing",
            "Starting from ₹15 Lakh onwards (100 Guz)",
        ],
        images: ["/assets/luxury/v2.avif"],
    },
];


const SORT_OPTIONS = [
    { value: "default", label: "Default" },
    { value: "latest", label: "Latest" },
    { value: "highprice", label: "Price: High to Low" },
    { value: "lowprice", label: "Price: Low to High" },
];

export default function LuxaryPropertiesPage() {
    const [sortBy, setSortBy] = useState("default");

    const sortedProperties = useMemo(() => {
        const arr = [...luxaryProperties];
        switch (sortBy) {
            case "latest":
                return arr.sort((a, b) => b.id - a.id);
            case "highprice":
                return arr.sort((a, b) => parsePriceINR(b.price) - parsePriceINR(a.price));
            case "lowprice":
                return arr.sort((a, b) => parsePriceINR(a.price) - parsePriceINR(b.price));
            default:
                return arr;
        }
    }, [sortBy]);

    const total = sortedProperties.length;

    return (
        <div className="max-w-7xl mx-auto">
            <BreadFilterComponent
                parentComponent="Properties"
                parentRoute="/properties"
                childComponent="Luxury"
                total={total}
                sortBy={sortBy}
                setSortBy={setSortBy}
                sortOptions={SORT_OPTIONS}
            />

            <div className="px-4 py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedProperties.map((property) => (
                    <LuxuryCard key={property.id} property={property} />
                ))}
            </div>
        </div>
    );
}
