"use client"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function Breadcrumb({ parentComponent, parentRoute, childComponent }) {
    return (
        <div className="bg-[var(--luxury-dark-light)] p-3 rounded-md shadow-md mb-4">
            <div className="flex items-center gap-2 text-sm">
                <Link href="/" className="luxury-hover">Home</Link>
                <ChevronRight size={14} className="text-[var(--luxury-gold)]" />
                {parentComponent && (
                    <>
                        <Link href={parentRoute || "#"} className="luxury-hover">{parentComponent}</Link>
                        <ChevronRight size={14} className="text-[var(--luxury-gold)]" />
                    </>
                )}
                <span className="text-[var(--luxury-gold)] font-semibold">{childComponent}</span>
            </div>
        </div>
    )
}
