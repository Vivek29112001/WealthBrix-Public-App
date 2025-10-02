"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton" // ShadCN loader
import { AnimatePresence, motion } from "framer-motion"
import { FaHeart, FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined, FaHome } from "react-icons/fa"

export default function LuxuryCard({
    property,
    onViewDetails,
    onToggleLike,
    liked: likedProp = false,
    companyLogo,
    className = "",
}) {
    const router = useRouter()
    const [liked, setLiked] = useState(likedProp)
    const [imageIndex, setImageIndex] = useState(0)

    // If no property data, show loader
    if (!property) {
        return (
            <Card className="overflow-hidden rounded-2xl shadow-lg border border-gray-100 p-4">
                <Skeleton className="w-full aspect-[16/9] rounded-lg mb-4" />
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2 mb-4" />
                <div className="flex gap-2">
                    <Skeleton className="h-8 w-16 rounded-full" />
                    <Skeleton className="h-8 w-16 rounded-full" />
                    <Skeleton className="h-8 w-16 rounded-full" />
                </div>
            </Card>
        )
    }

    const handleNextImage = () => {
        if (!property?.images?.length) return
        setImageIndex((prev) => (prev + 1) % property.images.length)
    }

    const handleLikeClick = (e) => {
        e.stopPropagation()
        setLiked((prev) => {
            const next = !prev
            onToggleLike?.(next)
            return next
        })
    }

    const handleCardClick = () => {
        if (onViewDetails) return onViewDetails(property)
        if (property?.link) router.push(property.link)
    }

    return (
        <Card
            onClick={handleCardClick}
            className={`overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 relative bg-white border border-gray-100 group cursor-pointer ${className}`}
        >
            {/* Floating Type Tag */}
            {property?.type && (
                <motion.div
                    initial={{ y: -15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="absolute top-4 left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur-md text-gray-800 text-sm font-semibold px-6 py-1 rounded-full shadow-md border border-gray-200"
                    onClick={(e) => e.stopPropagation()}
                >
                    <span className="inline-flex items-center gap-2">
                        <FaHome className="opacity-70" />
                        {property.type}
                    </span>
                </motion.div>
            )}

            {/* Image Section */}
            <div
                className="relative w-full aspect-[16/9] sm:aspect-[3/2] md:aspect-[16/9] cursor-pointer overflow-hidden"
                onClick={(e) => {
                    e.stopPropagation()
                    handleNextImage()
                }}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={imageIndex}
                        initial={{ scale: 1.05, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.98, opacity: 0 }}
                        transition={{ duration: 0.45, ease: "easeInOut" }}
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${property.images?.[imageIndex] ?? "/placeholder.png"})`,
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent group-hover:from-black/60 transition duration-300" />
                    </motion.div>
                </AnimatePresence>

                {/* Status Badge */}
                {property?.status && (
                    <div
                        className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-extrabold tracking-widest uppercase px-3 py-1 rounded-full shadow-lg drop-shadow-md backdrop-blur-sm z-40 border border-white/20"
                    >
                        🏷 {property.status}
                    </div>
                )}

                {/* Price Tag */}
                {property?.price && (
                    <div className="absolute bottom-4 left-4 text-white font-semibold text-lg bg-black/50 px-4 py-1 rounded-full backdrop-blur-sm shadow-md z-40">
                        {property.price}
                    </div>
                )}

                {/* Heart Icon */}
                <motion.div
                    whileTap={{ scale: 0.85 }}
                    className={`absolute bottom-4 right-4 p-2 rounded-full cursor-pointer shadow-lg ${liked ? "bg-red-500" : "bg-black/50 hover:bg-red-500"
                        } transition-colors duration-300 z-40`}
                    onClick={handleLikeClick}
                    title={liked ? "Liked" : "Like"}
                >
                    <FaHeart className="text-white text-lg" />
                </motion.div>
            </div>

            {/* Details Section */}
            <CardContent className="bg-white pb-4 px-5">
                <div className="flex items-start justify-between gap-3">
                    <div className="flex flex-col gap-1 min-w-0">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300 line-clamp-2">
                            {property.title ?? property.name}
                        </h3>
                        {property?.location && (
                            <div className="flex items-center text-gray-600 gap-2">
                                <FaMapMarkerAlt className="text-orange-600 shrink-0" />
                                <span className="text-sm truncate">{property.location}</span>
                            </div>
                        )}
                    </div>


                </div>

                {/* Specs */}
                <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-gray-700">
                    {property?.bedrooms != null && (
                        <span className="inline-flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full border">
                            <FaBed className="opacity-70" /> {property.bedrooms} BHK
                        </span>
                    )}
                    {property?.bathrooms != null && (
                        <span className="inline-flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full border">
                            <FaBath className="opacity-70" /> {property.bathrooms} Bath
                        </span>
                    )}
                    {property?.area && (
                        <span className="inline-flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full border">
                            <FaRulerCombined className="opacity-70" /> {property.area}
                        </span>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}
