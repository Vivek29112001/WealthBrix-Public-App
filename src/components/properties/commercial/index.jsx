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

const CommercialProperties = [
    {
        id: 1,
        title: "Luxury 3BHK Apartment",
        location: "Sector 150, Noida",
        price: "₹ 1.25 Cr",
        type: "Apartment",
        bedrooms: 3,
        bathrooms: 3,
        area: "1850 sq.ft",
        status: "Ready to Move",
        images: ["/assets/apartment/p1.jpg", "/assets/apartment/p1-2.jpg", "/assets/apartment/p1-3.jpg"],
        link: "/properties/residential/1",
    },
    {
        id: 2,
        title: "Premium 4BHK Villa",
        location: "Golf Course Extension, Gurgaon",
        price: "₹ 3.45 Cr",
        type: "Villa",
        bedrooms: 4,
        bathrooms: 4,
        area: "3200 sq.ft",
        status: "Under Construction",
        images: ["/assets/apartment/p2.jpg", "/assets/apartment/p2-2.jpg"],
        link: "/properties/residential/2",
    },
    {
        id: 3,
        title: "2BHK Affordable Apartment",
        location: "Sector 78, Noida",
        price: "₹ 65 Lakh",
        type: "Apartment",
        bedrooms: 2,
        bathrooms: 2,
        area: "1050 sq.ft",
        status: "Ready to Move",
        images: ["/assets/apartment/p3.jpg"],
        link: "/properties/residential/3",
    },
    {
        id: 4,
        title: "4BHK Affordable Apartment",
        location: "Sector 78, Noida",
        price: "₹ 95 Lakh",
        type: "Apartment",
        bedrooms: 4,
        bathrooms: 4,
        area: "1050 sq.ft",
        status: "Ready to Move",
        images: ["/assets/apartment/p4.jpg", "/assets/apartment/p4-2.jpg"],
        link: "/properties/residential/4",
    },
];

const SORT_OPTIONS = [
    { value: "default", label: "Default" },
    { value: "latest", label: "Latest" },
    { value: "highprice", label: "Price: High to Low" },
    { value: "lowprice", label: "Price: Low to High" },
];

export default function CommercialPropertiesPage() {
    const [sortBy, setSortBy] = useState("default");

    const sortedProperties = useMemo(() => {
        const arr = [...CommercialProperties];
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
