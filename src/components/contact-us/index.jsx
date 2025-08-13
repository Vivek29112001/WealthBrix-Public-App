"use client"

import React from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"

const ContactUsPage = () => {
    return (
        <div className=" flex items-center justify-center bg-gray-50 mt-20">
            <Card className="max-w-md text-center shadow-lg border border-gray-200">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2">
                        <Clock className="h-6 w-6 text-orange-500" />
                        Coming Soon
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-gray-600 mb-6">
                        We’re working hard to bring you something amazing. Stay tuned!
                    </p>
                    <Button variant="default" className="bg-orange-500 hover:bg-orange-600 text-white">
                        Notify Me
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default ContactUsPage
