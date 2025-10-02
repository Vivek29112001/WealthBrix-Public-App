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
        title: "ATS Commercial Shop",
        location: "ATS, Noida",
        price: "₹ 56 Lakh",
        type: "Shop",
        area: "171 sq.ft",
        status: "Ready to Move",
        images: ["/assets/commercial/a1.jpg"],
    },
    {
        id: 2,
        title: "Commercial Shop - Medium",
        location: "ATS, Noida",
        price: "₹ 90 Lakh",
        type: "Shop",
        area: "380 sq.ft",
        status: "Ready to Move",
        images: ["/assets/commercial/a2.jpg"],
    },
    {
        id: 3,
        title: "Commercial Shop - Large",
        location: "ATS, Noida",
        price: "₹ 1.8 Cr",
        type: "Shop",
        area: "900 sq.ft",
        status: "Ready to Move",
        images: ["/assets/commercial/a3.jpg"],
    },
    {
        id: 4,
        title: "Commercial Shop - Extra Large",
        location: "ATS, Noida",
        price: "₹ 2.4 Cr",
        type: "Shop",
        area: "1200 sq.ft",
        status: "Ready to Move",
        images: ["/assets/commercial/a4.jpg"],
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
