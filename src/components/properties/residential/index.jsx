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

const ResidentialProperties = [
    {
        id: 1,
        title: "2BHK Apartment",
        location: "Amrapali, Noida",
        price: "₹ 65 Lakh starting",
        type: "Apartment",
        bedrooms: 2,
        bathrooms: 2,
        area: "1050 sq.ft",
        status: "Ready to Move",
        images: ["/assets/residential/a1.jpg"],
    },
    {
        id: 2,
        title: "3BHK Apartment",
        location: "Panchsheel, Noida",
        price: "₹ 1 Cr starting",
        type: "Apartment",
        bedrooms: 3,
        bathrooms: 3,
        area: "1550 sq.ft",
        status: "Ready to Move",
        images: ["/assets/residential/a2.webp"],
    },
    {
        id: 3,
        title: "4BHK Apartment",
        location: "Panchsheel, Noida",
        price: "₹ 1.3 Cr starting",
        type: "Apartment",
        bedrooms: 4,
        bathrooms: 4,
        area: "2050 sq.ft",
        status: "Ready to Move",
        images: ["/assets/residential/a3.jpg"],
    },
];


const SORT_OPTIONS = [
    { value: "default", label: "Default" },
    { value: "latest", label: "Latest" },
    { value: "highprice", label: "Price: High to Low" },
    { value: "lowprice", label: "Price: Low to High" },
];

export default function ResidentialPropertiesPage() {
    const [sortBy, setSortBy] = useState("default");

    const sortedProperties = useMemo(() => {
        const arr = [...ResidentialProperties];
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
                childComponent="Residential"
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
