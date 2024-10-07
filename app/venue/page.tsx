import React from 'react'
import { MapPin, Phone, Globe, Clock, Calendar } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Navbar} from "@/components/shared";

export default function VenuePage() {
    return (
        <main className={'bg-blue_bg'}>
            <Navbar />
            <div
                className="text-white py-12 px-4 sm:px-6 lg:px-8 mt-20">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-12">Conference Venue</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <Card className="bg-gray-800 border-gray-700">
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold">Sathyabama Centre for Advanced Studies
                                    (SCAS)</CardTitle>
                                <CardDescription className="text-gray-400">
                                    Sathyabama Institute of Science and Technology
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center space-x-2">
                                    <MapPin className="text-blue-500"/>
                                    <span>Kamaraj Nagar, Semmancheri, Chennai, Tamil Nadu 600119</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Phone className="text-blue-500"/>
                                    <span>+91 123-456-7890</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Globe className="text-blue-500"/>
                                    <a href="https://www.sathyabama.ac.in"
                                       className="text-blue-400 hover:underline"
                                       target="_blank"
                                    >
                                        www.sathyabama.ac.in
                                    </a>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Clock className="text-blue-500"/>
                                    <span>Open 24 hours</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Calendar className="text-blue-500"/>
                                    <span>Conference Dates: February 1-2, 2025</span>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <a href={"https://maps.app.goo.gl/cotK4JZDhHVV3mTw8"} className={"w-full"} target="_blank">
                                    <Button className="w-full">Get Directions</Button>
                                </a>
                            </CardFooter>
                        </Card>
                        <Card className="bg-gray-800 border-gray-700 overflow-hidden">
                            <CardContent className="p-0">
                                <div className="relative h-0 pb-[56.25%]">
                                    <iframe
                                        src="https://maps.app.goo.gl/cotK4JZDhHVV3mTw8"
                                        className="absolute top-0 left-0 w-full h-full"
                                        style={{border: 0}}
                                        allowFullScreen={true}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="mt-12">
                        <h2 className="text-2xl font-bold mb-4">About the Venue</h2>
                        <p className="text-gray-300">
                            SCAD College of Engineering and Technology provides a perfect setting for our conference.
                            With its modern facilities and convenient location, it offers an ideal environment for
                            learning, networking, and collaboration. The venue is equipped with state-of-the-art
                            presentation technology and comfortable seating to ensure a productive and enjoyable
                            experience for all attendees.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}