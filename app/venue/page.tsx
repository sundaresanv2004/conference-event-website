'use client'

import React from 'react'
import { MapPin, Globe, Clock, Calendar } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { motion } from 'framer-motion'

export default function VenuePage() {
    return (
        <main className={'bg-blue_bg'}>
            <div className="text-white py-12 px-4 sm:px-6 lg:px-8 mt-20">
                <div className="max-w-7xl mx-auto">
                    <motion.h1
                        className="text-4xl sm:text-5xl font-extrabold text-center mb-12"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Conference Venue
                    </motion.h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <motion.div
                            initial={{opacity: 0, x: -50}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.5, delay: 0.2}}
                        >
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
                                        <Globe className="text-blue-500"/>
                                        <a href="https://www.sathyabama.ac.in"
                                           className="text-blue-400 hover:underline"
                                           target="_blank"
                                           rel="noopener noreferrer"
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
                                    <a href="https://maps.app.goo.gl/cotK4JZDhHVV3mTw8" className="w-full"
                                       target="_blank" rel="noopener noreferrer">
                                        <Button
                                            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white transition-colors duration-200 sm:mt-3"
                                        >
                                            Get Directions
                                        </Button>
                                    </a>
                                </CardFooter>
                            </Card>
                        </motion.div>
                        <motion.div
                            initial={{opacity: 0, x: 50}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.5, delay: 0.4}}
                        >
                            <Card className="bg-gray-800 border-gray-700 overflow-hidden">
                                <CardContent className="p-0">
                                    <div className="relative h-0 pb-[56.25%]">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.7453402099493!2d80.22526457486731!3d12.871319190936682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525b0e1618d76d%3A0xc5be1e1462ec6d0d!2sSathyabama%20Centre%20for%20Advanced%20Studies!5e0!3m2!1sen!2sin!4v1697438158180!5m2!1sen!2sin"
                                            className="absolute top-0 left-0 w-full h-full"
                                            style={{border: 0}}
                                            allowFullScreen={true}
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>


                    </div>
                    <motion.div
                        className="mt-12"
                        initial={{opacity: 0, y: 50}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.6}}
                    >
                        <h2 className="text-2xl font-bold mb-4">About the Venue</h2>
                        <p className="text-gray-300">
                            Sathyabama Institute of Science and Technology (SIST) provides a perfect setting for our conference.
                            With its modern facilities and convenient location, it offers an ideal environment for learning, networking,
                            and collaboration. The venue is equipped with state-of-the-art presentation technology and comfortable seating
                            to ensure a productive and enjoyable experience for all attendees.
                        </p>
                    </motion.div>
                </div>
            </div>
        </main>
    )
}