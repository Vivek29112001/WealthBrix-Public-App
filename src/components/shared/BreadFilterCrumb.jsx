"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import SortFilter from "@/components/properties/shortFilter"; // ✅ your existing sort filter

export default function BreadFilterComponent({
    // Breadcrumb props
    parentComponent,
    parentRoute,
    childComponent,

    // Filter bar props
    total = 0,
    sortBy,
    setSortBy,
    sortOptions = [],
}) {
    return (
        <div >

            {/* Filter Row */}
            <div className="px-3 py-0 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between ">
                <h2 className="text-sm font-bold text-gray-900 sm:text-base font-medium ">
                    Showing <span className="font-semibold">1–{total}</span> of{" "}
                    <span className="font-semibold">{total}</span> results
                </h2>

                <SortFilter
                    value={sortBy}
                    onChange={setSortBy}
                    options={sortOptions}
                    label="Sort by:"
                    compact
                />
            </div>
        </div>
    );
}
