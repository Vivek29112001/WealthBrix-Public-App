"use client";
import React from "react";

export default function Choose() {
    return (
        <section className="max-w-7xl mx-auto py-12 px-6 bg-white">
            <div className="text-center lg:text-left mb-8">
                <h4 className="text-orange-600 font-semibold text-sm uppercase tracking-widest">
                    Why Choose Our Properties
                </h4>
                <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mt-2">
                    Discover What Sets Us Apart
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full mt-3"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
                    <p className="text-gray-600">
                        No hidden fees: our complete cost breakdown ensures you know exactly what you’re paying for, and how much you’re saving.
                    </p>
                </div>

                {/* Feature 2 */}
                <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold mb-2">Verified Listings Only</h3>
                    <p className="text-gray-600">
                        Each property is verified by our local experts—real photos, real specs, real reassurance.
                    </p>
                </div>

                {/* Feature 3 */}
                <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold mb-2">Trusted by Our Clients</h3>
                    <p className="text-gray-600">
                        Our highest priorities are transparency, service, and trust—our ⭐⭐⭐⭐⭐ reviews say it all.
                    </p>
                </div>
            </div>
        </section>
    );
}
