"use client";
import React from "react";

export default function SortFilter({
    label = "Sort by:",
    value,
    onChange,
    options = [],
    className = "",
    selectClassName = "",
    id = "sort-by",
    compact = false, // true => smaller padding
}) {
    return (
        <label
            htmlFor={id}
            className={`flex items-center gap-3 text-sm text-gray-700 ${className}`}
        >
            <span className="whitespace-nowrap">{label}</span>
            <select
                id={id}
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
                className={`rounded-md border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 ${compact ? "px-2 py-1" : "px-3 py-2"
                    } ${selectClassName}`}
            >
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </label>
    );
}
